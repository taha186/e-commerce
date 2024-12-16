import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder,private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){}
  cartid:any;
  checkout:FormGroup=this._FormBuilder.group({


    details:[''],
    phone:[''],
    city:['']

  })
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       
        this.cartid=params.get('id')
        

      }
    })
    
    
  }
  
  handelform():void{
    this._CartService.checkdata(this.cartid,this.checkout.value).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.status=="success"){
          window.open(response.session.url,'_self')
       
        }
        

      }
    })
    
    


  }

}
