import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit, OnDestroy {

  orders = [];
  subscriber;

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.getUserOrders("1");
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getUserOrders(id) {
    this.subscriber = this.ordersService.getUserOrders(id)
      .subscribe((orders: Array<any>) => {
        if (orders) {
          this.orders = orders;
        }
      },
        (err) => {
        });
  }

  cancelOrder(id) {
    this.subscriber = this.ordersService.cancelOrder(id)
      .subscribe((res: string) => {
        if (res) {
          this.orders = this.orders.filter(o => o._id !== id);
        }
      },
        (err) => {
        });
  }

  showDetails(event: Event, param) {
    if ((event.target as HTMLElement).tagName !== "BUTTON") {
      let parent = event.target as HTMLElement;
      for (let i = 0; i < 5; i++) {
        if (parent.classList.contains("rowHover")) {
          break;
        }
        parent = parent.parentElement;
      }
      const orderNumber= parent.childNodes[1].childNodes[0].textContent.substring(1);
      this.router.navigate([`orders/${param}`, { orderNumber: orderNumber }]);
    }
  }

}
