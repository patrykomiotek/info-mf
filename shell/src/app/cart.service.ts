import { Injectable, signal } from '@angular/core';
import { Flight } from './dtos/flight';

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly flights = signal<Flight[]>([]);

  constructor() {
    window.addEventListener('message', (event: MessageEvent) => {
      if (event.data?.type === 'ADD_FLIGHT' && event.data.payload) {
        this.flights.update((flights) => [...flights, event.data.payload]);
      }
    });
  }
}
