import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/Order.model';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order: Order;
  subscriber;
  shippingDate;
  id;
  orderNumber;

  constructor(private ordersService: OrdersService, myActivatedRoute: ActivatedRoute) {
    this.id = myActivatedRoute.snapshot.params["id"];
    this.orderNumber = myActivatedRoute.snapshot.params["orderNumber"];
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.subscriber = this.ordersService.getOrderById(this.id)
      .subscribe((order: any) => {
        if (order) {
          this.order = order;
          this.shippingDate = new Date(this.order.date);
          this.shippingDate.setDate(this.shippingDate.getDate() + 15);
        }
      },
        (err) => {
        });
  }
}
