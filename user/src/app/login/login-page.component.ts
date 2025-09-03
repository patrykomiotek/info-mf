import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form.component';

@Component({
  selector: 'login-page',
  standalone: true,
  template: `
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">Login Page</h1>
      <login-form />
    </div>
  `,
  imports: [LoginFormComponent],
})
export class LoginPageComponent {}
