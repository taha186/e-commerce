import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isLoading:boolean=false
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService ,private _CartService:CartService){}
    productId:any
    productDetails:any
  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId=params.get('id')
    })

    this._ProductsService.getProductDetails(this.productId).subscribe({
      next:(response)=>{this.productDetails=response.data
      }
    })

                  }

                  customOptions: OwlOptions = {
                    loop: true,
                    mouseDrag: true,
                    touchDrag: false,
                    pullDrag: false,
                    dots: false,
                    navSpeed: 700,
                    navText: ['', ''],
                    responsive: {
                      0: {
                        items: 1
                      },

                    },
                    nav: true
                  }

//
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
