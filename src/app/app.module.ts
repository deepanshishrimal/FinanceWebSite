import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminConsumerVerifyComponent } from './admin-consumer-verify/admin-consumer-verify.component';
import { AdminConsumerEditComponent } from './admin-consumer-edit/admin-consumer-edit.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductOrderComponent,
    HomeComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminConsumerVerifyComponent,
    AdminConsumerEditComponent,
    ConsumerDashboardComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    AdminloginComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
