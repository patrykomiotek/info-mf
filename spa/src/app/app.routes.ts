import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    title: 'Home Page',
  },
  {
    path: 'admin',
    component: AdminPage,
    title: 'Admin Page',
  },
];
