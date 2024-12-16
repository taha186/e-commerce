import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductservicesService } from 'src/app/shared/services/productservices.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductservicesService:ProductservicesService){}
  paramid:any;
  productdetails:any;
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(response)=>{
       
        this.paramid=response.get('id');
        console.log(this.paramid);
        this._ProductservicesService.getproductsdetails(this.paramid).subscribe({
          next:(response)=>{
            console.log(response.data);
            this.productdetails=response.data;

            

          }
        })

        
        

      }

    })
  }

  mainslideproduct: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
