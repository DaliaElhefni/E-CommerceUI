import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from './components/Products/products.component'
import {ProductServiceService} from './services/product-service.service'
import { HttpClientModule } from '@angular/common/http';
import { SoloProuctComponent } from './components/solo-prouct/solo-prouct.component';

const routes:Routes = [
 
  {path:'products/:id',component:SoloProuctComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SoloProuctComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
