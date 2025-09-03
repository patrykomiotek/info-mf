import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Flight {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartEvent {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAR_CART';
  payload?: Flight;
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private cartEvents$ = new Subject<CartEvent>();

  constructor() {
    console.log('🚀 EventBusService constructor called');

    // Listen for localStorage changes (cross-origin communication)
    window.addEventListener('storage', (event) => {
      console.log('📡 Storage event received:', event.key, event.newValue);

      if (event.key === 'cart-event' && event.newValue) {
        try {
          const cartEvent = JSON.parse(event.newValue) as CartEvent;
          console.log('📡 Received cart event via localStorage:', cartEvent);
          this.emitCartEvent(cartEvent);
        } catch (error) {
          console.error('Error parsing cart event:', error);
        }
      }
    });

    // Also listen for custom events (for same-origin communication)
    window.addEventListener('cart-event', (event: any) => {
      console.log('📡 Custom cart event received:', event.detail);
      if (event.detail) {
        this.emitCartEvent(event.detail);
      }
    });

    console.log('✅ EventBusService initialized');
  }

  // Emit cart events
  emitCartEvent(event: CartEvent): void {
    console.log('📤 Emitting cart event:', event);
    this.cartEvents$.next(event);
  }

  // Subscribe to cart events
  onCartEvent(): Observable<CartEvent> {
    console.log('📥 Cart event subscription requested');
    return this.cartEvents$.asObservable();
  }

  // Add flight to cart
  addToCart(flight: Flight): void {
    console.log('➕ EventBusService.addToCart called with:', flight);

    const event: CartEvent = {
      type: 'ADD_TO_CART',
      payload: flight,
    };
    this.emitCartEvent(event);

    // Also broadcast via localStorage for cross-origin communication
    this.broadcastEvent(event);
  }

  // Remove flight from cart
  removeFromCart(flight: Flight): void {
    const event: CartEvent = {
      type: 'REMOVE_FROM_CART',
      payload: flight,
    };
    this.emitCartEvent(event);
    this.broadcastEvent(event);
  }

  // Clear cart
  clearCart(): void {
    const event: CartEvent = {
      type: 'CLEAR_CART',
    };
    this.emitCartEvent(event);
    this.broadcastEvent(event);
  }

  // Broadcast event via localStorage for cross-origin communication
  private broadcastEvent(event: CartEvent): void {
    try {
      console.log('📡 Broadcasting event via localStorage:', event);
      localStorage.setItem('cart-event', JSON.stringify(event));

      // Also dispatch a custom event for same-origin communication
      window.dispatchEvent(new CustomEvent('cart-event', { detail: event }));

      // Remove the item after a short delay to allow other tabs to pick it up
      setTimeout(() => {
        localStorage.removeItem('cart-event');
      }, 100);
    } catch (error) {
      console.error('Error broadcasting event:', error);
    }
  }
}
