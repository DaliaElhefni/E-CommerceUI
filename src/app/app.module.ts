import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from './components/Products/products.component'
import {ProductServiceService} from './services/product-service.service'
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service'
import { TokenInterceptorService } from './services/token-interceptor.service'
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './components/profile/profile.component'


const routes:Routes = [
 
  {path:'products/:id',component:SoloProuctComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SoloProuctComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AllOrdersComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthenticationService, CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  ProductServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
