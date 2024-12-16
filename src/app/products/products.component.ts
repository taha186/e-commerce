import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isLoading:boolean=false
  products:any[] = []
  searchValue:string=''
  constructor(private _ProductsService:ProductsService , private _CartService:CartService){}
  ngOnInit():void{
    this._ProductsService.getProducts().subscribe({
      next:(response)=>{
        this.products=response.data
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

  addToWishlist(productId:string){
    this.isLoading=true
    this._CartService.addProductToWishlist(productId).subscribe({
      next:(response)=>{
        // console.log(response);
        this.isLoading=false
        if(response.status == "success"){
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
