import Swal from 'sweetalert2';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  isLoading:boolean=false
  isLoadingUpdate:boolean=false
  cartDetails:any
  constructor(private _CartService:CartService){}
  ngOnInit(): void {

    this.getCart()
  }


  getCart(){
    this._CartService.getLoggedUserCart().subscribe({
      next:(response)=>{
        // console.log(response.data._id);
        this.cartDetails=response.data
      },
      error:(err)=>{

      }
    })
  }

  removeItem(productId:string){
    this.isLoading=true
    this._CartService.removeCartItem(productId).subscribe({
      next:(response)=>{
        // console.log(response);
        this.isLoading=false
        this.cartDetails=response.data
        if(response.status == "success"){
          this._CartService.numberOfCartItem.next(response.numOfCartItems)
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
  updateItem(productId:string , count:number){
    this.isLoadingUpdate=true
    this._CartService.updateCartItem(productId,count).subscribe({
      next:(response)=>{
        this.cartDetails=response.data
        this.isLoadingUpdate=false
        this.handelCount(productId , count)
      },error:(err)=>{
        this.isLoadingUpdate=false
        Swal.fire({
          icon: 'error',
          text: 'Please Check Your Internet Connection',
        })
      }
    })
  }

  handelCount(productId:string , count:number){
    if(count == 0){
      this.removeItem(productId)
    }
  }

}
