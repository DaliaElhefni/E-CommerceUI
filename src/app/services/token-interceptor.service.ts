import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private cookie : CookieService) { }
  intercept(req,next){
    let tokinizedRequest = req.clone({
      setHeaders:{
        Authorization : 'Bearer ' + this.cookie.get('token')
      }
    })
    return next.handle(tokinizedRequest);
  }
  
}
