import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: any;
  subscriber;
  shippingDate;
  id;
  orderNumber;
  imageSrc;

  constructor(private ordersService: OrdersService, myActivatedRoute:ActivatedRoute) {
    this.id = myActivatedRoute.snapshot.params["id"];
    this.orderNumber = myActivatedRoute.snapshot.params["orderNumber"];
    console.log(myActivatedRoute.snapshot.params)  
   }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  ngOnInit(): void {
    this.getOrder("5e9c972f3033141e7845adf4");
  }

  getOrder(id) {
    this.subscriber = this.ordersService.getOrderById(this.id)
      .subscribe((order: any) => {
        if (order) {
          this.order = order;
          this.shippingDate = new Date(this.order.date);
          this.shippingDate.setDate(this.shippingDate.getDate() + 15);
          this.imageSrc = "https://images.unsplash.com/photo-1585858966671-d8013e7f4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          
        }
      },
        (err) => {
          console.log(err)
        });
  }
}
