import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  subscribe;
  Products;
  constructor(private myService: ProductsService, private cookie : CookieService, private router: Router) { }

  ngOnInit(): void {
    this.subscribe = this.myService.getProductsWithPromotion()
      .subscribe((Products) => {
        this.Products = Products;
      },
        (err) => {
        });
  }
  redirectTo(){
    if(this.cookie.get('token') !== ""){
      window.location.reload();
    }
    else{
      this.router.navigate([`login`, {}]);
    }
  }
}
