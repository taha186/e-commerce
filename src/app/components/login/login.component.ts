import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  isloading:boolean=true;
  formlogin:FormGroup=new FormGroup({
   
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
   
  });
  hellologin():void{
   
    

    if(this.formlogin.valid){
      this.isloading=true
      this._AuthService.setlogin(this.formlogin.value).subscribe({
        next:(response)=>{
          if(response.message==='success'){
            this.isloading=false
            localStorage.setItem('eToken',response.token)
            this._Router.navigate(['/home'])
          }
          console.log(response)
          

        },error:(err)=>{
          this.isloading=false
          console.log(err);
          

        }
      })

     

    }else{
      this.formlogin.markAllAsTouched();
    }
  
     

     

    }
  
  }


