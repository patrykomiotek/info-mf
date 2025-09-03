import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, signal, Type } from '@angular/core';

@Component({
  selector: 'login-page',
  imports: [CommonModule, NgComponentOutlet],
  standalone: true,
  template: `
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">Login Page</h1>
      @if (loginForm()) {
      <ng-container *ngComponentOutlet="loginForm()"></ng-container>
      } @else {
      <p>Cannot load component</p>
      }
    </div>
  `,
})
export class LoginPageComponent {
  loginForm = signal<Type<unknown> | null>(null);

  constructor() {
    this.loadLoginForm();
  }

  private async loadLoginForm() {
    try {
      const component = await import('user/LoginForm');
      this.loginForm.set(component.LoginFormComponent);
    } catch (error) {
      console.error('Error loading cart info component', error);
    }
  }
}
