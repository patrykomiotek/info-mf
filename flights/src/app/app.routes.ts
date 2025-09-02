import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { FlightsSearchComponent } from './flights/flights-search.component';

export const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: FlightsSearchComponent,
  },
];
