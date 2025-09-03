import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = signal(false);

  checkCredentials(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
    }
  }

  logout() {
    this.isLoggedIn.set(false);
  }

  getIsLoggedIn() {
    return this.isLoggedIn();
  }
}
