import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-cart',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="info-cart">
    <h3>Cart Information</h3>
    <div class="cart-stats">
      <p>Items in cart: {{ itemCount() }}</p>
      <p>Total: \${{ totalAmount() }}</p>
    </div>
    <button class="view-cart-btn" (click)="viewCart()">View Cart</button>
  </div>`,
  styles: [
    `
      .info-cart {
        background: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
      }

      .cart-stats {
        margin: 12px 0;
      }

      .cart-stats p {
        margin: 4px 0;
        color: #495057;
      }

      .view-cart-btn {
        background: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }

      .view-cart-btn:hover {
        background: #0056b3;
      }
    `,
  ],
})
export class InfoCartComponent {
  itemCount = signal(3);
  totalAmount = signal(149.99);

  viewCart() {
    console.log('Navigate to cart page');
    // You can emit an event or use router to navigate
  }
}
