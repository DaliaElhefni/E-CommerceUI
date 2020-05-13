import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit, OnDestroy {

  orders = [];
  subscriber;

  constructor(private toastr: ToastrService, private ordersService: OrdersService, private router: Router) {
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }


  getAllOrders() {
    this.subscriber = this.ordersService.getAllOrders()
      .subscribe((orders: Array<any>) => {
        if (orders) {
          this.orders = orders;
        }
      },
        (err) => {
        });
  }

  acceptOrder(param) {
    let order = this.orders.find(o => o._id === param);
    order.status = "accepted";
    this.subscriber = this.ordersService.changeOrderState(order)
      .subscribe((res: string) => {
        if (res) {
          this.toastr.success("Order Accepted Successfully!");
        }
      },
        (err) => {
          order.status = "pending";
        });
  }

  rejectOrder(param) {
    let order = this.orders.find(o => o._id === param);
    order.status = "rejected";
    this.subscriber = this.ordersService.changeOrderState(order)
      .subscribe((res: string) => {
        if (res) {
          this.toastr.success("Order Rejected Successfully!");
        }
      },
        (err) => {
          order.status = "pending";
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
      const orderNumber = parent.childNodes[1].childNodes[0].textContent.substring(1);
      this.router.navigate([`orders/${param}`, { orderNumber: orderNumber }]);
    }
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

}
