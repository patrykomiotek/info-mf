import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartWidgetComponent } from '../shared/components/cart-widget/cart-widget.component';
import { EventBusService } from '../shared/services/event-bus.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CartWidgetComponent],
  templateUrl: './home.component.html',
  styles: [
    `
      :host {
        --bright-blue: oklch(51.01% 0.274 263.83);
        --electric-violet: oklch(53.18% 0.28 296.97);
        --french-violet: oklch(47.66% 0.246 305.88);
        --vivid-pink: oklch(69.02% 0.277 332.77);
        --hot-red: oklch(61.42% 0.238 15.34);
        --orange-red: oklch(63.32% 0.24 31.68);

        --gray-900: oklch(19.37% 0.006 300.98);
        --gray-700: oklch(36.98% 0.014 302.71);
        --gray-400: oklch(70.9% 0.015 304.04);

        --red-to-pink-to-purple-vertical-gradient: linear-gradient(
          180deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%
        );

        --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
          90deg,
          var(--orange-red) 0%,
          var(--vivid-pink) 50%,
          var(--electric-violet) 100%
        );

        --pill-accent: var(--bright-blue);

        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1 {
        font-size: 3.125rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
        margin: 0;
        font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      }

      p {
        margin: 0;
        color: var(--gray-700);
      }

      .content {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 700px;
        margin-bottom: 3rem;
      }

      .content h1 {
        margin-top: 1.75rem;
      }

      .content p {
        margin-top: 1.5rem;
      }

      .divider {
        width: 1px;
        background: var(--red-to-pink-to-purple-vertical-gradient);
        margin-inline: 0.5rem;
      }

      .angular-logo {
        max-width: 9.2rem;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  protected readonly title = signal('my-app-2');
  protected readonly name = signal('John Doe');

  private eventBus = inject(EventBusService);
  private cartService = inject(CartService);

  // Expose cart data for debugging
  cartItemsCount = this.cartService.cartItemsCount;
  cartTotal = this.cartService.cartTotal;

  ngOnInit() {
    console.log('🏠 HomeComponent initialized');
    console.log('🔍 EventBus instance:', this.eventBus);
    console.log('🔍 CartService instance:', this.cartService);
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }

  testCart() {
    console.log('🧪 Testing cart functionality...');

    // Test direct EventBus call
    this.eventBus.addToCart({
      id: 123,
      name: 'Test Flight',
      description: 'A test flight for debugging',
      price: 299.99,
    });

    console.log('✅ Test flight added to cart');
  }

  clearCart() {
    console.log('🗑️ Clearing cart from home component');
    this.cartService.clearCart();
  }
}
