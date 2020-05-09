import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
// import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';
import {ProductsComponent} from './components/Products/products.component'
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/account/details/details.component';

const routes:Routes = [
  // {path:'products/promotion',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'home',component:ProductsComponent},
  // {path:'orders',component:AllOrdersComponent},
  // {path:'orders/:id',component:OrderDetailsComponent},
  {path:'users/:id/orders',component:UserOrdersComponent},
  // {path:'',redirectTo:'products',pathMatch:'full'},
  // {path:'products/:id',component:SoloProuctComponent},
  // {path:':id',component:SoloProuctComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:DetailsComponent},





  // {path:'**',component:ErrorComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
