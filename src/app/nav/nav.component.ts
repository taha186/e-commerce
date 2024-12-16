import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLogin:boolean=false
  cartNumber:number=0
  constructor(private _AuthService:AuthService ,private _CartService:CartService ){
    _CartService.numberOfCartItem.subscribe({
      next:(response)=>{
        this.cartNumber=response
      },error:(err)=>{

      }
    })



    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue() !== null){
          this.isLogin=true
        }
        else{
          this.isLogin=false
        }
      }
    })

  }

  logOut(){
    this._AuthService.logOut()
  }

}
