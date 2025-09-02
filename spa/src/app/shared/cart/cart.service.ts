import { Injectable, signal } from '@angular/core';
import { Flight } from '../../flights/dtos/Flight.dto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<Flight[]>([]);
  addToCart(item: Flight): void {
    const existingItems = this.items();
    if (existingItems.find((i) => i.id === item.id)) {
      return;
    }
    const newItems = [...this.items(), item];
    this.items.update((items) => newItems);
  }
  getItems() {
    return this.items.asReadonly();
  }
  clearCart(): void {
    this.items.set([]);
  }
  removeFromCart(id: number): void {
    this.items.update((items) => items.filter((item) => item.id !== id));
  }
}
