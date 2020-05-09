import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private client:HttpClient) { }
  baseURL = "http://localhost:3000"
  getAllOrders()
  {
    return this.client.get(`${this.baseURL}/orders`);
  }

  getUserOrders(id)
  {
    return this.client.get(`${this.baseURL}/users/${id}/orders`);
  }
  
  getOrderById(id)
  {
    return this.client.get(`${this.baseURL}/orders/${id}`);
  }

  createOrder(order){
    return this.client.post(`${this.baseURL}/orders`,order);
  }

  cancelOrder(id){
    return this.client.delete(`${this.baseURL}/orders/${id}`, {responseType: 'text'});
  }

  changeOrderState(order){
    return this.client.patch(`${this.baseURL}/orders/${order._id}`,order);
  }
}
