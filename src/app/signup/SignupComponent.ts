import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading: boolean = false;
  apiError: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    rePassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)]),
  }, { validators: this.RePasswordMatch });


  RePasswordMatch(form: any) {
    let password = form.get('password');
    let rePassword = form.get('rePassword');
    if (password.value === rePassword.value) {
      return null;
    } else {
      rePassword.setErrors({ rePasswordMatch: 'rePassword not matched' });
      return { rePasswordMatch: 'rePassword not matched' };
    }
  }

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this._Router.navigate(['signin']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;

        }
      });
    }
  }
}
