import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';

import {ProductsComponent} from './components/Products/products.component'

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/:id',component:SoloProuctComponent},
  {path:'products',component:ProductsComponent},

  {path:':id',component:SoloProuctComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
