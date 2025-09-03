import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
  // {
  //   path: 'login',
  //   loadComponent: () => import('./login/login-page.component').then((m) => m.LoginPageComponent),
  //   title: 'Login Page',
  // },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
      }),
  },
  {
    path: 'flights',
    loadComponent: () =>
      import('./flights/flights-page.component').then((m) => m.FlightsPageComponent),
    title: 'Flights Page',
  },
  {
    path: 'flights/:flightId',
    loadComponent: () =>
      import('./flights/flight-details.component').then((m) => m.FlightDetailsComponent),
    title: 'Flight Details',
  },
  {
    path: 'admin',
    component: AdminPage,
    title: 'Admin Page',
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart-page.component').then((m) => m.CartPageComponent),
    title: 'Cart Page',
  },
];
