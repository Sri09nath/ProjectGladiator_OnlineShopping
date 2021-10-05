import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './Home/carousel/carousel.component';
import { TopProductsComponent } from './Home/top-products/top-products.component';
import { TopProductsListComponent } from './Home/top-products-list/top-products-list.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Retailer/register/register.component';
import { RegisterOTPComponent } from './Retailer/register-otp/register-otp.component';
import { RegisterDetailsComponent } from './Retailer/register-details/register-details.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';
import { UserForgotPswdComponent } from './Users/user-forgot-pswd/user-forgot-pswd.component';
import { UserOTPComponent } from './Users/user-otp/user-otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ProductDetailsComponent } from './Retailer/product-details/product-details.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDesComponent } from './Products/product-des/product-des.component';
import { CompareComponent } from './compare/compare.component';
import { UserProfileComponent } from './Users/user-profile/user-profile.component';

import { CartComponent } from './cart/cart.component';
import { AllProductsComponent } from './Products/all-products/all-products.component';

import { OrdersComponent } from './Users/orders/orders.component';
import { PendingProductsComponent } from './pending-products/pending-products.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    TopProductsComponent,
    TopProductsListComponent,
   
    LoginComponent,
        RegisterComponent,
        RegisterOTPComponent,
        RegisterDetailsComponent,
        UserRegisterComponent,
        UserForgotPswdComponent,
        UserOTPComponent,
        NewPasswordComponent,
        ProductDetailsComponent,
        AdminComponent,
        ProductDesComponent,
        CompareComponent,
        UserProfileComponent,
       
        CartComponent,
        AllProductsComponent,
        
        OrdersComponent,
                  PendingProductsComponent,
    
        
        
     

     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
