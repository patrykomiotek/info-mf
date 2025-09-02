import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-home">
      <h2 class="text-2xl font-bold">Cart Microfrontend</h2>
      <p class="text-gray-500">Welcome to the cart component!</p>
    </div>
  `,
  styles: [
    `
      .cart-home {
        padding: 20px;
        text-align: center;
      }
    `,
  ],
})
export class HomeComponent {}
