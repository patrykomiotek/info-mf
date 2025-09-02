import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: 'search', // Shell: flights/search
    component: FlightsSearchComponent,
  },
];
