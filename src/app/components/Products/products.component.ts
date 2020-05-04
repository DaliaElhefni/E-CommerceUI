import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from 'src/app/services/product-service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myService: ProductServiceService) { }
 Products ;
  ngOnInit(){

    let subscrription = this.myService.getProducts()
    .subscribe((Products) => {
      console.log(Products)
      this.Products = Products
    },
      (err) => {
        console.log(err)
      })
  console.log(subscrription)
  }

  showDetails(param){
    console.log(param);
  }


}
