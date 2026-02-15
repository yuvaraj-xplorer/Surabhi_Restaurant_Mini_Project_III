import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { UserLoginComponent } from './Authentication/user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {UserCrudComponent} from './user-crud/user-crud.component';
import { MenuCrudComponent } from './menu-crud/menu-crud.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'product',component:ProductComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'signup',component:UserRegisterComponent},
  {path:'login',component:UserLoginComponent},
  {path:'adminreg',component:AdminRegisterComponent},
  {path:'adminlog',component:AdminLoginComponent},
  {path:'userop',component:UserCrudComponent},
  {path:'menuop',component:MenuCrudComponent},
  {path:'adminpage',component:AdminDashboardComponent},
  {path:'user-update/:id',component:UpdateUserComponent},
  {path:'food-update/:id',component:UpdateFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
