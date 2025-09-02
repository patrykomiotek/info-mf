import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="input-wrapper">
      @if (label()) {
      <label [for]="id()" class="input-label">{{ label() }}</label>
      }
      <input
        [id]="id()"
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        [disabled]="disabled()"
        (input)="onInputChange($event)"
        (blur)="onBlur.emit($event)"
        class="input-field"
        [class.error]="hasError()"
      />
      @if (errorMessage()) {
      <span class="error-message">{{ errorMessage() }}</span>
      }
    </div>
  `,
  styles: [
    `
      .input-wrapper {
        margin-bottom: 16px;
      }
      .input-label {
        display: block;
        margin-bottom: 4px;
        font-weight: 500;
      }
      .input-field {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      .input-field.error {
        border-color: #dc3545;
      }
      .error-message {
        color: #dc3545;
        font-size: 14px;
        margin-top: 4px;
      }
    `,
  ],
})
export class InputComponent {
  id = input<string>('');
  label = input<string>('');
  type = input<'text' | 'password' | 'email'>('text');
  placeholder = input<string>('');
  value = model<string>('');
  disabled = input<boolean>(false);
  hasError = input<boolean>(false);
  errorMessage = input<string>('');

  onInput = output<Event>();
  onBlur = output<Event>();

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.onInput.emit(event);
  }
}
