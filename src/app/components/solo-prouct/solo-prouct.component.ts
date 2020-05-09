import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-solo-prouct',
  templateUrl: './solo-prouct.component.html',
  styleUrls: ['./solo-prouct.component.css']
})
export class SoloProuctComponent implements OnInit {
  subscriber
  id
  product
  constructor(private myActivatedRoute:ActivatedRoute,
    private myService:ProductServiceService) {
    this.id = this.myActivatedRoute.snapshot.params["id"];
   }
  ngOnDestroy(): void {
   this.subscriber.unsubscribe()
  }

  ngOnInit() {
    this.getProduct()
  }
  getProduct() {

    this.subscriber = this.myService.getProductsByid(this.id)
    .subscribe((product)=>{
      console.log(product)
      if(product)
      this.product = product ;
    },
    (err)=>{
      console.log(err)
    })
  }

}
