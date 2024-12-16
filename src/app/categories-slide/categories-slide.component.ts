import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories-slide',
  templateUrl: './categories-slide.component.html',
  styleUrls: ['./categories-slide.component.css']
})
export class CategoriesSlideComponent implements OnInit {
  categories:any[]=[]
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {

    this._ProductsService.getCategories().subscribe({
      next:(response)=>{this.categories=response.data
        console.log(this.categories);

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
