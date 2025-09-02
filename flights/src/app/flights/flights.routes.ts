import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search.component';
import { FlightsListComponent } from './flights-list.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: 'search', // Shell: flights/search
    component: FlightsSearchComponent,
  },
  {
    path: 'list', // Shell: flights/list
    component: FlightsListComponent,
  },
  {
    path: ':flightId',
    loadComponent: () => import('./flight-details.component').then((m) => m.FlightDetailsComponent),
    title: 'Flight Details',
  },
];
