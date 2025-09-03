import { Injectable, signal, computed, inject } from '@angular/core';
import { EventBusService, Flight, CartEvent } from './event-bus.service';

export interface CartItem {
  flight: Flight;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private eventBus = inject(EventBusService);

  private cartItems = signal<CartItem[]>([]);

  // Computed values
  cartItemsCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));

  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.flight.price * item.quantity, 0)
  );

  constructor() {
    console.log('🛒 CartService constructor called');
    console.log('🔍 EventBus instance:', this.eventBus);

    this.subscribeToEvents();
    console.log('🛒 CartService initialized');
  }

  private subscribeToEvents(): void {
    console.log('📡 Setting up event subscription...');

    try {
      this.eventBus.onCartEvent().subscribe((event: CartEvent) => {
        console.log('🔄 Cart event received:', event);

        switch (event.type) {
          case 'ADD_TO_CART':
            if (event.payload) {
              console.log('➕ Adding flight to cart:', event.payload);
              this.addToCart(event.payload);
            }
            break;
          case 'REMOVE_FROM_CART':
            if (event.payload) {
              console.log('➖ Removing flight from cart:', event.payload);
              this.removeFromCart(event.payload);
            }
            break;
          case 'CLEAR_CART':
            console.log('🗑️ Clearing cart');
            this.clearCart();
            break;
        }

        console.log('📊 Current cart state:', this.cartItems());
      });

      console.log('✅ Event subscription set up successfully');
    } catch (error) {
      console.error('❌ Failed to set up event subscription:', error);
    }
  }

  private addToCart(flight: Flight): void {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find((item) => item.flight.id === flight.id);

    if (existingItem) {
      // Update quantity
      existingItem.quantity += 1;
      this.cartItems.set([...currentItems]);
      console.log('📈 Updated quantity for flight:', flight.name);
    } else {
      // Add new item
      this.cartItems.set([...currentItems, { flight, quantity: 1 }]);
      console.log('🆕 Added new flight to cart:', flight.name);
    }
  }

  private removeFromCart(flight: Flight): void {
    const currentItems = this.cartItems();
    this.cartItems.set(currentItems.filter((item) => item.flight.id !== flight.id));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  getCartItems() {
    return this.cartItems();
  }

  updateQuantity(flightId: number, quantity: number): void {
    const currentItems = this.cartItems();
    const item = currentItems.find((item) => item.flight.id === flightId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(item.flight);
      } else {
        item.quantity = quantity;
        this.cartItems.set([...currentItems]);
      }
    }
  }
}
