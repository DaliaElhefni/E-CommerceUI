import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-solo-prouct',
  templateUrl: './solo-prouct.component.html',
  styleUrls: ['./solo-prouct.component.css']
})
export class SoloProuctComponent implements OnInit {
  subscriber;
  id;
  product;
  UserProducts = [];
  Products
  user;
  productimage: File;
  submitted = false;
  Form: FormGroup;
  selectedFile;

  constructor(private router: Router, private myActivatedRoute: ActivatedRoute, private myService: ProductsService, 
    private _usersService: UsersService, private formBuilder: FormBuilder, private communicationService: CommunicationService) {
    this.id = this.myActivatedRoute.snapshot.params["id"];
  }

  initializeForm() {
    if (this.product) {
      this.Form = this.formBuilder.group({
        title: [this.product.title, [Validators.required]],
        quantity: [this.product.quantity, Validators.required],
        price: [this.product.price, Validators.required],
        details: [this.product.details, Validators.required],
        promotion: [this.product.promotion, Validators.required],
        productimage: [this.product.productimage, Validators.required],
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit() {
    this.getProduct();
    this.getUser();
  }

  getProduct() {
    this.subscriber = this.myService.getProductsByid(this.id)
      .subscribe((product) => {
        if (product)
          this.product = product;
        this.initializeForm();
      },
        (err) => {
        });
  }

  getUser() {
    this.subscriber = this._usersService.getUser()
      .subscribe((user) => {
        if (user)
          this.user = user;
      },
        (err) => {
        });
  }

  get f() { return this.Form.controls; }

  onFileChange(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.Form.patchValue({
      productimage: file
    });
    this.Form.get('productimage').updateValueAndValidity();
  }

  UpdateProduct() {
    this.submitted = true;
    var formData: any = new FormData();
    formData.append("title", this.Form.get('title').value);
    formData.append('quantity', this.Form.get('quantity').value);
    formData.append('price', this.Form.get('price').value);
    formData.append('details', this.Form.get('details').value);
    formData.append('promotion', this.Form.get('promotion').value);
    formData.append("productimage", this.Form.get('productimage').value);

    this.subscriber = this.myService.UpdateProduct(this.product._id, formData)
      .subscribe((res: string) => {
        if (res) {
          this.product = res;
        }
      },
        (err) => {
        });
  }

  getUserProducts(id) {
    this.subscriber = this.myService.getUserProducts(id)
      .subscribe((products: Array<any>) => {
        if (products) {
          this.UserProducts = products;
        }
      },
        (err) => {
        });
  }

  AddToCart() {
    if(!this.user){
      this.router.navigate([`login`, {}]);
      return;
    }
    let prod = {
      product: this.product._id
      , quantityordered: 1
    }
    this.subscriber = this.myService.AddToCart(this.user._id, prod)
      .subscribe((user: any) => {
        this.communicationService.emitChange(user.products.length);
      }, (err) => {
      });
  }

  deletproduct() {
    this.subscriber = this.myService.deletProduct(this.id)
      .subscribe((product) => {
        this.Products = this.Products.filter(p => p._id != this.id);
        if (product) {
          this.router.navigate([`products`, {}]);
        }
      },
        (err) => {
        });
  }
}
