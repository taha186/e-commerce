import { Component } from '@angular/core';
import{FormGroup , FormControl , Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  isLoading:boolean=false
  apiError:string=''

  constructor(private _AuthService:AuthService , private _Router:Router){
    if(localStorage.getItem('userToken') !== null){
      this._Router.navigate(['/home'])
    }
  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.minLength(5)]),
  })

  handleLogin(loginForm:FormGroup){
    this.isLoading=true
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        next: (response)=>{
          if(response.message === 'success'){
            localStorage.setItem('userToken',response.token)
            this._AuthService.decodeUserData()
            this._Router.navigate(['home'])
          }
        },
        error:(err)=>{
          this.isLoading=false
          this.apiError = err.error.message

        }
      })
    }
  }
}
