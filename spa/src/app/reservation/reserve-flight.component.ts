import { Component, inject, Input } from '@angular/core';

import { Flight } from '../flights/dtos/Flight.dto';
import { CartService } from '../shared/cart/cart.service';

@Component({
  selector: 'app-reserve-flight',
  template: `<button class="text-blue-500" (click)="reserve()">Reserve flight</button>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ReserveFlightComponent {
  private readonly cartService = inject(CartService);
  @Input() flight!: Flight;
  public reserve() {
    this.cartService.addToCart(this.flight);
  }
}
