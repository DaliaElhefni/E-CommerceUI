import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';
import { ProductsComponent } from './components/Products/products.component'
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/account/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/message/message.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { AuthenticationGuardService as AuthenticationGuard } from './services/authentication-guard.service';
import { AuthenticationRoleGuardService as AuthenticationRoleGuard } from './services/authentication-role-guard.service';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, canActivate: [AuthenticationGuard]  },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: AllOrdersComponent, canActivate:[AuthenticationRoleGuard] },
  { path: 'orders/:id', component: OrderDetailsComponent, canActivate: [AuthenticationGuard]  },
  { path: 'users/:id/orders', component: UserOrdersComponent , canActivate: [AuthenticationGuard] },
  { path: 'products/:id', component: SoloProuctComponent, canActivate: [AuthenticationGuard]  },
  { path: 'cart', component: CartComponent, canActivate: [AuthenticationGuard]  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: DetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'message', component: MessageComponent },
  { path: 'checkout', component: CheckoutFormComponent, canActivate: [AuthenticationGuard]  },

  { path: '**', component: ErrorComponent },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
