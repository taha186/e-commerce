import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  productId:string=''
  //  allOrder:string=''
  constructor(private _CartService:CartService){}

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next:(response)=>{
        this.productId=response.data._id
        console.log(response.data.cartOwner);
        // this.allOrder=response.data.cartOwner
      },error:(err)=>{
        console.log(err);

      }
    })
  }

  payment:FormGroup=new FormGroup({
    details:new FormControl(null , [Validators.required]),
    phone:new FormControl(null , [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)]),
    city:new FormControl(null , [Validators.required])
  })


  navigateToPage(url:string){
    window.location.href=url
  }

  onlinePayment(payment:FormGroup){
    this._CartService.handelPayment(this.productId , payment.value).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.status=='success'){
          this.navigateToPage(response.session.url)
        }
      },error:(err)=>{
        console.log(err);

      }
    })

  }



}
