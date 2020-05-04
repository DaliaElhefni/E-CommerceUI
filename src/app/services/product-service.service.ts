import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';

// import{environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
   baseURL:string = "http://localhost:3000";
 // baseURL:string = "https://jsonplaceholder.typicode.com";

   // baseURL:string = environment.baseURL;

  constructor(private http: HttpClient) {   
     this.myObservable = new Observable((subscriber)=>{
    console.log('started')
    let num = 0;
      setInterval(()=>{
        subscriber.next(num++)
      
      },1000)
  })
}
myObservable
  getProducts()
  { 
    return this.http.get(`${this.baseURL}/products`,{observe:'body'})
  }

  getProductsByid(id)
  { 
    return this.http.get(`${this.baseURL}/products/${id}`,{observe:'body'})
  }
  
}
