import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
Router


@Component({
  selector: 'app-regisiter',
  templateUrl: './regisiter.component.html',
  styleUrls: ['./regisiter.component.css']
})
export class RegisiterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  isloading:boolean=true;
  formgrioup:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:[this.conformpassword]}as FormControlOptions);
  hello():void{
    console.log(this.formgrioup.value)
    

    
    if(this.formgrioup.valid){
      this.isloading=true
      this._AuthService.setregisiter(this.formgrioup.value).subscribe({
        next:(response)=>{
          if(response.message==='success'){
            this.isloading=false
            this._Router.navigate(['/login'])
          }
          console.log(response)
          

        },error:(err)=>{
          this.isloading=false
          console.log(err);
          

        }
      })

     

    }
  
  }
  conformpassword(group:FormGroup):void{
    let password=group.get(' password');
    let repassword=group.get('rePassword ')
  if(repassword?.value == ''){
    repassword?.setErrors({required:true})
  }else if(password?.value !=password?.value){
    repassword?.setErrors({mismatch:true})
  }

  }

}
