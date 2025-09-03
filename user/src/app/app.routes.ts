import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    pathMatch: 'full',
  },
];
