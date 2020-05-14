import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {
  Products = [];
  subscriber;
  user;

  constructor(private myActivatedRoute: ActivatedRoute, private myService: ProductsService, private _usersService: UsersService, private communicationService: CommunicationService) {
    this.getUser();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {}

  getUser() {
    this.subscriber = this._usersService.getUser()
      .subscribe((user) => {
        if (user)
          this.user = user;
          this.getUserProducts(this.user._id);
      },
        (err) => {
        });
  }

  updateAddedQantity(id, Quantityordered) {
    let tempProduct = this.Products.find( p=> p.product._id == id);
    if(tempProduct.product.quantity >= (Quantityordered+1)){
      let prod = {
        product: id
        , quantityordered: Quantityordered + 1
      }
      this.subscriber = this.myService.AddToCart(this.user._id, prod)
        .subscribe((user) => {
        }, (err) => {
        });
      tempProduct.quantityordered++;
    }
  }

  updateQantity(id, Quantityordered) {
    let tempProduct = this.Products.find( p=> p.product._id == id);
    if((Quantityordered-1) !== 0){
      let prod = {
        product: id
        , quantityordered: Quantityordered - 1
      }
  
      this.subscriber = this.myService.AddToCart(this.user._id, prod)
        .subscribe((user) => {
        }, (err) => {
        });
      tempProduct.quantityordered--;
    }
  }

  DeleteProductFromcart(id) {
    this.subscriber = this.myService.DeletFromCart(this.user._id, id)
      .subscribe((prod) => {
        this.Products = this.Products.filter(p => p.product._id != id);
        this.communicationService.emitChange(this.Products.length);
      }, (err) => {
      });
  }

  getUserProducts(id) {
    this.subscriber = this.myService.getUserProducts(id)
      .subscribe((products: Array<any>) => {
        if (products) {
          this.Products = products;
        }
      },
        (err) => {
        });
  }
}
