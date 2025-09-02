import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'flights',
    loadChildren: () => import('flights/Module').then((m) => m.FlightsModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Home').then((m) => m.HomeModule),
  },
];
