import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './services/authentication.service'
import {TokenInterceptorService} from './services/token-interceptor.service'
import {CookieService} from 'ngx-cookie-service';
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
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
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> eee8baf81a0ecc1d742968b63a1da390df3a6d1c
  bootstrap: [AppComponent]
})
export class AppModule { }
