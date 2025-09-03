import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { FlightsService } from './flights.service';
import { Flight } from './dtos/Flight.dto';

@Component({
  selector: 'flights-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flight-list.html',
})
export class FlightsListComponent {
  private flightsService = inject(FlightsService);
  flights$!: Observable<Flight[]>;

  constructor() {
    effect(() => {
      this.flights$ = this.flightsService.getFlights();
    });
  }

  addToCart(flight: Flight) {
    console.log('🚀 Adding flight to cart:', flight);

    // Create the cart event
    const event = {
      type: 'ADD_TO_CART',
      payload: flight,
    };

    // Try custom event first (for same-origin)
    try {
      window.dispatchEvent(new CustomEvent('cart-event', { detail: event }));
      console.log('✅ Custom cart event dispatched');
    } catch (error) {
      console.log('⚠️ Custom event failed:', error);
    }

    // Also use localStorage for cross-origin communication
    try {
      localStorage.setItem('cart-event', JSON.stringify(event));
      console.log('📡 Event broadcasted via localStorage');

      // Clean up after a short delay
      setTimeout(() => {
        localStorage.removeItem('cart-event');
      }, 100);
    } catch (error) {
      console.error('❌ Failed to broadcast event:', error);
    }
  }
}
