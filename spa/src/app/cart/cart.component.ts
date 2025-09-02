import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../shared/cart/cart.service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  template: ` <a routerLink="/cart">Cart {{ items().length }}</a> `,
  styles: `
  :host{
  display: flex;
    gap: 1rem;
    background: #F5F5F5;
    border-radius: 8px;
  }
  a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }`,
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  items = this.cartService.items;
}
