import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-[400px]">
      <form (ngSubmit)="login()" class="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          [(ngModel)]="username"
          placeholder="Username"
          class="border border-gray-300 rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          [(ngModel)]="password"
          placeholder="Password"
          class="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" class="bg-blue-500 text-white rounded-md p-2">Login</button>
      </form>
    </div>
  `,
})
export class LoginFormComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);

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
