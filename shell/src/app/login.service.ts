import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  readonly loggedInUser = signal<string | null>(null);

  constructor() {
    window.addEventListener('message', (event: MessageEvent) => {
      if (event.data?.type === 'LOGIN' && event.data.payload) {
        this.loggedInUser.set(event.data.payload);
      }
    });
  }
}
