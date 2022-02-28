import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {ProductsComponent} from "./component/products/products.component";
import {ShoppingCartComponent} from "./component/shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {OrderSuccessComponent} from "./component/order-success/order-success.component";
import {LoginComponent} from "./component/login/login.component";
import {AdminProductsComponent} from "./component/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./component/admin/admin-orders/admin-orders.component";
import {MyOrdersComponent} from "./component/my-orders/my-orders.component";
import {AuthGuard} from "./service/auth/auth-guard.service";
import {AdminAuthGuard} from "./service/auth/admin-auth-guard.service";
import {ProductFormComponent} from "./component/admin/product-form/product-form.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
