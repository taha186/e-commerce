import { Component } from '@angular/core';
import{FormGroup , FormControl , Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  isLoading:boolean=false
  apiError:string=''

  constructor(private _AuthService:AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !== null){
      this._Router.navigate(['/home'])
    }
  }

  resetForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    newPassword:new FormControl(null , [Validators.required , Validators.minLength(5)]),
  })

  resetPassword(resetForm:FormGroup){
    this.isLoading=true
    this._AuthService.resetPassword(resetForm.value).subscribe({
      next:(response)=>{console.log(response);
        this.isLoading=false
        this.apiError=''
        if(response.token){
          this._Router.navigate(['/signin'])
        }

      },
      error:(err)=>{
        console.log(err.error.message);
        this.apiError=err.error.message
        this.isLoading=false
      }
    })

  }
}
