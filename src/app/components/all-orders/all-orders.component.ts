import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders = [];
  

  constructor() { 
    let user = {
      username: "Dalia",
      id: "1"
    }
    
    let order1 = {
      _id:"jahb27rybf7wy3y",
      date: Date.now(),
      address: "hgj",
      totalprice: "12",
      status: "accepted",
      user: user,
      products: [{product:"1", orderedquantity:"2"},{product:"1", orderedquantity:"2"}]
    }
    let order2 = {
      _id:"75r3rvuy874ehf7ih",
      date: Date.now(),
      address: "hjbd jh",
      totalprice: "12",
      status: "rejected",
      user: user,
      products: [{product:"1", orderedquantity:"2"},{product:"1", orderedquantity:"2"}]
    }
    let order3 = {
      _id:"hjbilnley83r4",
      date: Date.now(),
      address: "6 oct city",
      totalprice: "1000",
      status: "pending",
      user: user,
      products: [{product:"1", orderedquantity:"2"},{product:"1", orderedquantity:"2"}]
    }
    this.orders.push(order1);
    this.orders.push(order2);
    this.orders.push(order3);

  }

  acceptOrder(param){
    let order = this.orders.find( o=> o._id === param );
    // update db
    order.status = "accepted";
    // update db
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
