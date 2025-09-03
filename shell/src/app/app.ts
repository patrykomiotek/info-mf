import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly cartService = inject(CartService);
  private readonly loginService = inject(LoginService);

  protected readonly title = signal('shell');

  protected readonly cartCount = computed(() => this.cartService.flights().length);
  loggedInUser = this.loginService.loggedInUser;
}
