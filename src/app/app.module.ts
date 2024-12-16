import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/SignupComponent';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { BrowserAnimationsModule } from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CategoriesSlideComponent } from './categories-slide/categories-slide.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchPipe } from './search.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { BrandsSlideComponent } from './brands-slide/brands-slide.component';
import { CategoriesDeatilsComponent } from './categories-deatils/categories-deatils.component';
import { BrandsDetailsComponent } from './brands-details/brands-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllordersComponent } from './allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    NavComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CategoriesSlideComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    CheckoutComponent,
    SearchPipe,
    LoaderComponent,
    BrandsSlideComponent,
    CategoriesDeatilsComponent,
    BrandsDetailsComponent,
    WishlistComponent,
    AllordersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
