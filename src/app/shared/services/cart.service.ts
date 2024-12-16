import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers:any={token:localStorage.getItem('eToken')}

  constructor(private _HttpClient:HttpClient) { }
  addtocart(prodcutid:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId: prodcutid},{
      headers:this.headers
    })

  }

  getcart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.headers
    })
  }
  removeitemfromcart(ProductId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${ProductId}`,{headers:this.headers})
  }

  updatacart(productid:string,newcount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,{
        count: newcount
    },{
      headers:this.headers
    })
  }
  checkdata(id:string,cart:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
      shippingAddress:cart},{headers:this.headers})
  }





}
   
