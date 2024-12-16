import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands-slide',
  templateUrl: './brands-slide.component.html',
  styleUrls: ['./brands-slide.component.css']
})
export class BrandsSlideComponent implements OnInit{
  brands:any[]=[]

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {

    this._ProductsService.getBrands().subscribe({
      next:(response)=>{this.brands=response.data
        console.log(this.brands);

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
        items: 7
      },

    },
    nav: true
  }
}
