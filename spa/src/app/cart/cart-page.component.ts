import { Component, inject } from '@angular/core';
import { CartService } from '../shared/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  template: `
    Cart page - items in cart: {{ items().length }}
    <ul>
      @for (flight of items(); track flight.id) {
      <li>
        {{ flight.name }} {{ flight.price }}
        <span class="ps=1" (click)="remove(flight.id)">x</span>
      </li>
      }
    </ul>
  `,
})
export class CartPageComponent {
  private readonly cartService = inject(CartService);
  items = this.cartService.items;
  remove(id: number) {
    this.cartService.removeFromCart(id);
  }
}
