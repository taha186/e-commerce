import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _ProductsService:ProductsService ,private _CartService:CartService ){}
  wishlistDetails:any
  productId:any
  isLoading:boolean=false

ngOnInit(): void {
  this.getWishlist()
}



removeProductWishlist(ID:string){
  this.isLoading=true
    this._ProductsService.removeProductFromWishlist(ID).subscribe({
      next:(response)=>{
        console.log(response);
        this.isLoading=false
        if(response.status == "success"){
          this.getWishlist()
          Swal.fire({
            icon: 'success',
            text: 'the product has been deleted',
          })
        }

      },
      error:(err)=>{
        console.log(err);
      }
    })
}

getWishlist(){
  this._ProductsService.getLoggedUserWishlist().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.wishlistDetails=response.data
    },
    error:(err)=>{
      console.log(err);

    }
  })
}

addToCart(productId:string){
  this.isLoading=true
  this._CartService.addToCart(productId).subscribe({
    next:(response)=>{
      // console.log(response);
      this.isLoading=false
      if(response.status == "success"){
        this._CartService.numberOfCartItem.next(response.numOfCartItems)
        Swal.fire({
          icon: 'success',
          text: response.message,
        })
      }
    },
    error:(err)=>{
      // console.log(err);
      Swal.fire({
        icon: 'error',
        text: 'Please Check Your Internet Connection',
      })
      this.isLoading=false
    }
  })
}



}
