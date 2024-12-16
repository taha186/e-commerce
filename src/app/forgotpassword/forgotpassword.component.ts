import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  successMessage:string=''
  errMessage:string=''
  isLoading:boolean=false


  forgotForm:FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.required,Validators.email])
  })


  verifyForm:FormGroup=new FormGroup({
    resetCode:new FormControl(null , [Validators.required])
  })

  forgotPassword(forgotForm:FormGroup){
    this.isLoading=true
    // console.log(forgotForm.value);
    this._AuthService.forgotPassword(forgotForm.value).subscribe({
      next:(response)=>{
        this.isLoading=false
        console.log(response);
        this.errMessage=''
        this.successMessage=response.message
        document.querySelector('.forgotPassword')?.classList.add('d-none')
        document.querySelector('.verifyCode')?.classList.remove('d-none')
      },
      error:(err)=>{
        this.isLoading=false
        this.errMessage=err.error.message
      }
    })
  }
//
verifyCode(verifyForm:FormGroup){
  this.isLoading=true

console.log(verifyForm);
this._AuthService.verifyResetCode(verifyForm.value).subscribe({
  next:(response)=>{
    if(response.status == 'Success'){
      this.isLoading=false
      this._Router.navigate(['/resetPassword'])
      this.errMessage=''

    }
  },
  error:(err)=>{
    this.isLoading=false
    console.log(err.error.message);
    this.errMessage=err.error.message

  }
})

}



}
