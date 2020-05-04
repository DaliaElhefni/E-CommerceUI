import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service'
import {TokenInterceptorService} from './services/token-interceptor.service'
import {CookieService} from 'ngx-cookie-service';
import { ProfileComponent } from './components/profile/profile.component'
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { CustomFormatOrderDatePipe } from './pipes/custom-format-order-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AllOrdersComponent,
    UserOrdersComponent,
    OrderDetailsComponent,
    FormatDatePipe,
    CustomFormatOrderDatePipe

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,CookieService,{
  provide:  HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
