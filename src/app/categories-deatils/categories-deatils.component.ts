import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-deatils',
  templateUrl: './categories-deatils.component.html',
  styleUrls: ['./categories-deatils.component.css']
})
export class CategoriesDeatilsComponent implements OnInit {
  categoriesId:any
  categoriesDetails:any
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService){}

  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.categoriesId=params.get('id')
    })

    this._ProductsService.getCategoriesDetails(this.categoriesId).subscribe({
      next:(response)=>{this.categoriesDetails=response.data
      }
    })
  }
}
