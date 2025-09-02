import { Component, signal, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Hello, {{ title() }} {{ name() }}</h1>
        <p>Congratulations! Your app is running. 🎉</p>
        <p>This is the shell app</p>

        @if (infoCartComponent()) {
        <ng-container *ngComponentOutlet="infoCartComponent()"></ng-container>
        } @else {
        <p>Loading cart component...</p>
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  protected readonly title = signal('my-app-2');
  protected readonly name = signal('John Doe');

  infoCartComponent = signal<Type<unknown> | null>(null);

  constructor() {
    this.loadInfoCartComponent();
  }

  private async loadInfoCartComponent() {
    try {
      // Using direct import from configured remote
      const module = await import('cart/InfoCartComponent');
      this.infoCartComponent.set(module.InfoCartComponent);
    } catch (error) {
      console.error('Failed to load InfoCartComponent:', error);
    }
  }
}
