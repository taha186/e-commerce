import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  numberOfCartItem=new BehaviorSubject(0)
  cartId=new BehaviorSubject(null)
  baseUrl:string='https://ecommerce.routemisr.com'

  x:string=''
  constructor(private _HttpClient:HttpClient) {
    this.getLoggedUserCart().subscribe({
      next:(response)=>{
        // console.log(response);
        this.numberOfCartItem.next(response.numOfCartItems)
      },error:(err)=>{

      }
    })

  }

// i send atoken in headers instead of a interceptor because it caused proplems when logging out

  headers:any={
    token:localStorage.getItem('userToken')
  }




  addToCart(ID:string):Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/cart` ,
    {
      productId:ID
    },{
      headers:this.headers
    }
    )
  }


  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/cart` ,{
      headers:this.headers
    })
  }

  removeCartItem(ID:string):Observable<any>{

    return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${ID}` ,{
      headers:this.headers
    })
  }


  updateCartItem(ID:string ,count:number):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${ID}` ,{
      count:count
    },{
      headers:this.headers
    })
  }
// payment

  handelPayment(productId:string ,shippingAddress:any ):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${productId}?url=http://localhost:4200` ,{
      shippingAddress:shippingAddress
    },{
      headers:this.headers
    })
  }

  getUserOrders(productId:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${productId}` ,{
      headers:this.headers
    })
  }


  // wishlist
  addProductToWishlist(ID:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      productId:ID
    },{
      headers:this.headers
    }
    )
  }


}
