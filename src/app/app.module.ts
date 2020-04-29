import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms'
||||||| merged common ancestors
<<<<<<< HEAD
import {FormsModule} from '@angular/forms'
=======
import { FormsModule } from '@angular/forms'
>>>>>>> origin/master
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import {AuthenticationService} from './services/authentication.service'
import {TokenInterceptorService} from './services/token-interceptor.service'
import {CookieService} from 'ngx-cookie-service';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

||||||| merged common ancestors
import {AuthenticationService} from './services/authentication.service'
import {TokenInterceptorService} from './services/token-interceptor.service'
import {CookieService} from 'ngx-cookie-service';
=======
import { AuthenticationService } from './services/authentication.service'
import { TokenInterceptorService } from './services/token-interceptor.service'
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { CookieService } from 'ngx-cookie-service';
>>>>>>> origin/master
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD
    ProfileComponent,
    AllOrdersComponent

||||||| merged common ancestors
    ProfileComponent
=======
    ProfileComponent,
    AllOrdersComponent
>>>>>>> origin/master
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [AuthenticationService, CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
<<<<<<< HEAD
||||||| merged common ancestors
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> eee8baf81a0ecc1d742968b63a1da390df3a6d1c
=======

>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
