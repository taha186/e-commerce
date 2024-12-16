import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})

export class AllordersComponent implements OnInit {
  // cartOwner:any
  orders:any
  cartOwner:any
  ownerId:any
constructor(private _CartService:CartService){
  if(localStorage.getItem('userToken') !== null){
    this.decodeUserData()
  }
}

decodeUserData(){
  let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
  let decodedToken:any = jwtDecode(encodedToken)
  this.cartOwner = decodedToken
  this.ownerId=this.cartOwner.id
  this.getUserOrder(this.ownerId)
}

ngOnInit(): void {
  // this._CartService.getLoggedUserCart().subscribe({
  //   next:(response)=>{
  //     // this.cartOwner=response.data.cartOwner
  //     console.log(response);
  //     // this.allOrder=response.data.cartOwner
  //   },error:(err)=>{
  //     console.log(err);

  //   }
  // })
  // let ownerId =localStorage.getItem('userToken')
  console.log(this.cartOwner.id);


}


getUserOrder(ownerId:string){
  this._CartService.getUserOrders(ownerId).subscribe({
    next:(response)=>{
      console.log(response);
      this.orders=response
      console.log('ka');

    },error:(err)=>{
      console.log(err);
      console.log('sa');

    }
  })
}



}
