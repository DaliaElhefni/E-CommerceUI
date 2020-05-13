import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myService: ProductServiceService) { }
  AllProducts;
  Products;
  mymodel;
  ngOnInit() {

    let subscrription = this.myService.getProducts()
      .subscribe((Products) => {
        console.log(Products)
        this.Products = Products;
        this.AllProducts = Products;
      },
        (err) => {
          console.log(err)
        })
    console.log(subscrription)
  }

  showDetails(param) {
    console.log(param);
  }

  Search(event) {
    this.Products = this.AllProducts.filter(p => p.title.includes(event.target.value))
  }
}
