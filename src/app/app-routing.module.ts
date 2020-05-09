import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';
import {ProductsComponent} from './components/Products/products.component'

const routes:Routes = [
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:AllOrdersComponent},
  {path:'orders/:id',component:OrderDetailsComponent},
  {path:'users/:id/orders',component:UserOrdersComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/:id',component:SoloProuctComponent},
  {path:'products',component:ProductsComponent},
  {path:':id',component:SoloProuctComponent},

  // {path:'**',component:ErrorComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
