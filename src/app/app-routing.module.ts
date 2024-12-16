import { AllordersComponent } from './allorders/allorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrandsDetailsComponent } from './brands-details/brands-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/SignupComponent';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard'
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriesDeatilsComponent } from './categories-deatils/categories-deatils.component';


const routes: Routes = [
  {path:'',redirectTo:'signin' , pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent},
  {path:'brands',canActivate:[authGuard] ,component:BrandsComponent},
  {path:'cart',canActivate:[authGuard] ,component:CartComponent},
  {path:'categories',canActivate:[authGuard] ,component:CategoriesComponent},
  {path:'allorders',canActivate:[authGuard] ,component:AllordersComponent},
  {path:'products',canActivate:[authGuard] ,component:ProductsComponent},
  {path:'productDetails/:id',canActivate:[authGuard] ,component:ProductDetailsComponent},
  {path:'categoriesDetails/:id',canActivate:[authGuard] ,component:CategoriesDeatilsComponent},
  {path:'brandsDetails/:id',canActivate:[authGuard] ,component:BrandsDetailsComponent},
  {path:'checkOut',canActivate:[authGuard] ,component:CheckoutComponent},
  {path:'wishlist',canActivate:[authGuard] ,component:WishlistComponent},
  {path:'forgotPassword' ,component:ForgotpasswordComponent},
  {path:'resetPassword' ,component:ResetPasswordComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
