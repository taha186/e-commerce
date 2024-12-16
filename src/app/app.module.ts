import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategioresComponent } from './components/categiores/categiores.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisiterComponent } from './components/regisiter/regisiter.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import{HttpClientModule}from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import{BrowserAnimationsModule}from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermextPipe } from './shared/pipe/termext.pipe';
import { SearchPipe } from './shared/pipe/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CategioresComponent,
    FooterComponent,
    NavAuthComponent,
    NavBlankComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    BrandsComponent,
    LoginComponent,
    RegisiterComponent,
    NotfoundComponent,
    ProductsComponent,
    DetailsComponent,
    TermextPipe,
    SearchPipe,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(), 
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
