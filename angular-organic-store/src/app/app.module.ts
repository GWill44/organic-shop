import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './component/bs-navbar/bs-navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { AdminProductsComponent } from './component/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './component/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "./service/auth/auth.service";
import {AuthGuard} from "./service/auth/auth-guard.service";
import {AdminAuthGuard} from "./service/auth/admin-auth-guard.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
