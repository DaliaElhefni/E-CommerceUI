import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Models/user.model';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/Models/Order.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup;
  user: User;
  totalPrice;
  subscriber;
  addressStatus = true;

  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder, 
    private _userService: UsersService, private ordersService: OrdersService, private communicationService: CommunicationService) {
    this.getUser();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }

  async getUser() {
    await this._userService.getUser()
      .subscribe(res => this.initializeUser(res), err => {});
  }

  initializeUser(response) {
    this.user = new User();
    this.user = response;
    this.totalPrice = 0;
    this.user.products.forEach((item) => {
      this.totalPrice += (item.quantityordered * item.product.price);
    });
    this.checkoutForm = new FormGroup({
      username: new FormControl(this.user.username),
      address: new FormControl('', [Validators.required]),
      email: new FormControl(this.user.email),
    });
  }

  setAddressStatus() {
    if (this.checkoutForm.get('address').value === "") {
      this.addressStatus = false;
      return;
    }
    this.addressStatus = true;
  }

  createOrder() {
    let newOrder = new Order();
    newOrder.address = this.checkoutForm.get('address').value;
    newOrder.products = this.user.products.map((product) => {
      return { product: product.product._id, quantityordered: product.quantityordered };
    });
    newOrder.user = this.user._id;
    this.subscriber = this.ordersService.createOrder(newOrder)
      .subscribe((user: User) => {
        if (user) {
          this.toastr.success("Order Sumitted Succesfully!");
          this.user.products = [];
          this.communicationService.emitChange(0);
          setTimeout(() => {
            this.router.navigate([`users/${user._id}/orders`, {}]);
          }, 2000)
        }
      },
        (err) => {
          this.toastr.error("Something Wrong, Trya again later");
        });
  }

  validateInput() {
    this.setAddressStatus();
    if (this.checkoutForm.valid && this.addressStatus) {
      this.createOrder();
    }
  }
}
