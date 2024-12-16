import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService){}
  getcartproducts:any;
  ngOnInit(): void {
    this._CartService.getcart().subscribe({
      next:(response)=>{
        console.log(response);
       this.getcartproducts=response.data
       
       console.log(this.getcartproducts);
       
       

        

      },error:(err)=>{
        console.log(err);
        

      }
    })

    
  }removeitemfromcart(productid:string):void{
    this._CartService.removeitemfromcart(productid).subscribe({
      next:(response)=>{
        console.log(response);
        this.getcartproducts=response.data
        

      },error:(err)=>{
        console.log(err);
        

      }
    })
  }

  updatacart(productid:string,count:number):void{
 if(count>0){
  this._CartService.updatacart(productid,count).subscribe({
    next:(response)=>{
     
      this.getcartproducts=response.data
      

    }
  })
 }
  }
 
}
