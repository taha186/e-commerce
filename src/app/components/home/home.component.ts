import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from 'src/app/shared/services/productservices.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prdoct:any[]=[];
  Gategaeryimges:any;
  searchtext:string=''

  constructor(private _ProductservicesService:ProductservicesService,private _CartService:CartService,private _ToastrService:ToastrService){}

  mainslide: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
   
    nav: true
  }



  
  Gategairesoptions: OwlOptions = {
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


  addtocart(id:any):void{
    this._CartService.addtocart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.
          message
          );
        

      }
    })

  }





  ngOnInit(): void {
    this._ProductservicesService.getproducts().subscribe({
      next:(response)=>{

        console.log(response);
        this.prdoct=response.data;
        this._ProductservicesService.getallGategaeray().subscribe({
          next:(response)=>{
            console.log(response);
            this.Gategaeryimges=response.data
            console.log(this.Gategaeryimges);
            
            

          }
        })
        
      },


      
    })
    
  }

}
