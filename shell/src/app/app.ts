import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartWidgetComponent } from './shared/components/cart-widget/cart-widget.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CartWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('shell');
}
