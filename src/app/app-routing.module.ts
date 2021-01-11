import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminConsumerEditComponent } from './admin-consumer-edit/admin-consumer-edit.component';
import { AdminConsumerVerifyComponent } from './admin-consumer-verify/admin-consumer-verify.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "admin-consumer-edit/:id", component: AdminConsumerEditComponent },
  { path: "admin-consumer-verify", component: AdminConsumerVerifyComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "consumer-dashboard/:id", component: ConsumerDashboardComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "product-order/:id", component: ProductOrderComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
