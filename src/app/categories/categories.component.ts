import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[]
constructor(private _ProductsService:ProductsService){}
ngOnInit(): void {

  this._ProductsService.getCategories().subscribe({
    next:(response)=>{this.categories=response.data
      console.log(this.categories);

    }
  })
}

}
