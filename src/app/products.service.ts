import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
  headers:any={
    token:localStorage.getItem('userToken')
  }
  constructor(private _HttpClient:HttpClient) { }
  getProducts():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getCategoriesDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }

  getBrands():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getBrandsDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }

// wishlist

  getLoggedUserWishlist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      headers:this.headers
    })
  }


  addProductToWishlist(ID:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      productId:ID
    },{
      headers:this.headers
    }
    )
  }

  removeProductFromWishlist(ID:string):Observable<any>{

    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${ID}` ,{
      headers:this.headers
    })
  }




}
