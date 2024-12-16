import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CategioresComponent } from './components/categiores/categiores.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisiterComponent } from './components/regisiter/regisiter.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { authGardGuard } from './shared/services/gardes/auth-gard.guard';
import { DetailsComponent } from './components/details/details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path:'',canActivate:[authGardGuard]
    ,component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'categiores',component:CategioresComponent},
    {path:'brands',component:BrandsComponent},
    {path:'checkout/:id',component:CheckoutComponent},

    {path:'products',component:ProductsComponent},
    {path:'details/:id',component:DetailsComponent}
    
  ]},
  {path:'',component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisiterComponent}]},
    {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
