import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './Authentication/user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { MenuCrudComponent } from './menu-crud/menu-crud.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

@NgModule({
  declarations: [   
  AppComponent,
    HeaderComponent,
    ProductComponent,
    WishlistComponent,
    FilterPipe,
    UserLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserCrudComponent,
    MenuCrudComponent,
    AdminDashboardComponent,
    UpdateUserComponent,
    UpdateFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
