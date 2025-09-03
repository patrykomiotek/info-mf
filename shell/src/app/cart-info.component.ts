import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-info',
  template: `
    <h2>Flights Information</h2>
    <ul>
      @for (flight of flights(); track flight.id) {
      <li>{{ flight.id }} - {{ flight.name }}</li>
      }
    </ul>
  `,
})
export class CartInfoComponent {
  flights = inject(CartService).flights;
}
