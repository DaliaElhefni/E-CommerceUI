import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


const routes:Routes = [
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:AllOrdersComponent},
  {path:'orders/:id',component:OrderDetailsComponent},
  {path:'users/:id/orders',component:UserOrdersComponent},

  // {path:'**',component:ErrorComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
