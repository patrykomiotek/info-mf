import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type()"
      [class]="getButtonClasses()"
      [disabled]="disabled()"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .btn {
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s;
      }

      .btn-primary {
        background: #007bff;
        color: white;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
      .btn-danger {
        background: #dc3545;
        color: white;
      }
      .btn-success {
        background: #28a745;
        color: white;
      }

      .btn-small {
        padding: 8px 16px;
        font-size: 14px;
      }
      .btn-medium {
        padding: 12px 24px;
        font-size: 16px;
      }
      .btn-large {
        padding: 16px 32px;
        font-size: 18px;
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,
  ],
})
export class ButtonComponent {
  type = input<ButtonType>('button');
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  disabled = input<boolean>(false);
  onClick = output<Event>();

  getButtonClasses(): string {
    return `btn btn-${this.variant()} btn-${this.size()}`;
  }
}
