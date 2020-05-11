import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/account/details/details.component';
import {UserService} from './services/user.service'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from './components/Products/products.component'
import {ProductServiceService} from './services/product-service.service'
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service'
import { TokenInterceptorService } from './services/token-interceptor.service'
import { CookieService } from 'ngx-cookie-service';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { CustomFormatOrderDatePipe } from './pipes/custom-format-order-date.pipe';
import { OrdersService } from './services/orders.service';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    ProductsComponent,
    SoloProuctComponent,
    AllOrdersComponent,
    UserOrdersComponent,
    OrderDetailsComponent,
    FormatDatePipe,
    CustomFormatOrderDatePipe,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    MessageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [AuthenticationService,UserService,CookieService,{
  provide:  HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true  
  },
  ProductServiceService,
  OrdersService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
