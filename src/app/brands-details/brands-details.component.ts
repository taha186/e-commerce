import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.css']
})
export class BrandsDetailsComponent implements OnInit {
  brandsId:any
  brandsDetails:any
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService){}

  ngOnInit():void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.brandsId=params.get('id')
    })

    this._ProductsService.getBrandsDetails(this.brandsId).subscribe({
      next:(response)=>{this.brandsDetails=response.data
      }
    })
  }
}
