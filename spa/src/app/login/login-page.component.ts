import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form.component';

@Component({
  selector: 'login-page',
  standalone: true,
  template: `
    <div>
      <h1>Login Page</h1>
      <login-form />
    </div>
  `,
  imports: [LoginFormComponent],
})
export class LoginPageComponent {}
