import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label>
        Username:
        <input formControlName="username" type="text" />
      </label>

      <label>
        Password:
        <input formControlName="password" type="password" />
      </label>

      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log(this.loginForm.value);
    }
  }
}
