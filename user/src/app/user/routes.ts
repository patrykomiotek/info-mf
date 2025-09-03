import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form.component';

export const USER_ROUTES: Routes = [
  {
    path: 'login', // Shell: user/login
    component: LoginFormComponent,
  },
];
