import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders = [];
  

  constructor() { 
  }

  acceptOrder(param){
    let order = this.orders.find( o=> o._id === param );
    // update db
    order.status = "accepted";
  }

  rejectOrder(param){
    let order = this.orders.find( o=> o._id === param );
    // update db
    order.status = "rejected";
  }

  showDetails(param){
    console.log(param);
  }

  ngOnInit(): void {
  }

}
