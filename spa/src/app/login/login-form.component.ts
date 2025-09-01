import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="login()">
      <input type="text" name="username" [(ngModel)]="username" placeholder="Username" />
      <input type="password" name="password" [(ngModel)]="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginFormComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  username = '';
  password = '';
  isLoggedIn = computed(() => this.loginService.getIsLoggedIn());

  login() {
    this.loginService.checkCredentials(this.username, this.password);
    if (this.loginService.getIsLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}
