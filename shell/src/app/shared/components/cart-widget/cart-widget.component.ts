import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-widget.component.html',
  styles: [
    `
      .cart-widget {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        max-width: 400px;
      }

      .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e2e8f0;
      }

      .cart-header h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
      }

      .cart-count {
        background: #3b82f6;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
      }

      .cart-items {
        max-height: 300px;
        overflow-y: auto;
      }

      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #f1f5f9;
      }

      .item-info h4 {
        margin: 0 0 4px 0;
        font-size: 14px;
        font-weight: 600;
      }

      .item-description {
        margin: 0 0 4px 0;
        font-size: 12px;
        color: #64748b;
      }

      .item-price {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: #059669;
      }

      .item-controls {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .quantity-btn {
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
      }

      .quantity-btn:hover:not(:disabled) {
        background: #e2e8f0;
      }

      .quantity-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .quantity {
        font-weight: 600;
        min-width: 20px;
        text-align: center;
      }

      .remove-btn {
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 4px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        font-size: 12px;
      }

      .remove-btn:hover {
        background: #dc2626;
      }

      .cart-footer {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #e2e8f0;
      }

      .cart-total {
        text-align: right;
        margin-bottom: 12px;
        font-size: 16px;
      }

      .checkout-btn,
      .clear-btn {
        width: 100%;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        margin-bottom: 8px;
      }

      .checkout-btn {
        background: #059669;
        color: white;
      }

      .checkout-btn:hover {
        background: #047857;
      }

      .clear-btn {
        background: #f1f5f9;
        color: #64748b;
        border: 1px solid #e2e8f0;
      }

      .clear-btn:hover {
        background: #e2e8f0;
      }

      .empty-cart {
        text-align: center;
        padding: 32px 16px;
        color: #64748b;
      }

      .empty-cart p {
        margin: 8px 0;
      }
    `,
  ],
})
export class CartWidgetComponent implements OnInit {
  private cartService = inject(CartService);

  cartItemsCount = this.cartService.cartItemsCount;
  cartTotal = this.cartService.cartTotal;

  ngOnInit() {
    console.log('🛒 CartWidget initialized');
    console.log('📊 Initial cart count:', this.cartItemsCount());
    console.log('📊 Initial cart items:', this.getCartItems());
  }

  getCartItems() {
    const items = this.cartService.getCartItems();
    console.log('📦 Current cart items:', items);
    return items;
  }

  updateQuantity(flightId: number, quantity: number) {
    console.log('🔄 Updating quantity for flight', flightId, 'to', quantity);
    this.cartService.updateQuantity(flightId, quantity);
  }

  removeFromCart(flightId: number) {
    console.log('🗑️ Removing flight', flightId, 'from cart');
    this.cartService.updateQuantity(flightId, 0);
  }

  clearCart() {
    console.log('🗑️ Clearing entire cart');
    this.cartService.clearCart();
  }

  checkout() {
    console.log('Proceeding to checkout...');
    // Implement checkout logic
  }
}
