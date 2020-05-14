import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL: string = "http://localhost:3000";
  
  constructor(private http: HttpClient) {
  
  }

  getProducts() {
    return this.http.get(`${this.baseURL}/products`)
  }
  getProductsWithPromotion() {
    return this.http.get(`${this.baseURL}/products/promotions`)
  }

  getProductsByid(id) {
    return this.http.get(`${this.baseURL}/products/${id}`)
  }

  addProduct(prod) {
    return this.http.post<any>(`${this.baseURL}/products`, prod)
  }

  getUserProducts(id) {
    return this.http.get(`${this.baseURL}/users/${id}/products`);
  }

  deletProduct(id) {
    return this.http.delete(`${this.baseURL}/products/${id}`, { responseType: 'text' });
  }

  UpdateProduct(id, product) {
    return this.http.patch(`${this.baseURL}/products/${id}`, product);
  }

  AddToCart(id, product) {
    return this.http.patch(`${this.baseURL}/users/${id}/products `, product);
  }

  DeletFromCart(id, product) {
    return this.http.delete(`${this.baseURL}/users/${id}/products/${product}`);
  }
}
