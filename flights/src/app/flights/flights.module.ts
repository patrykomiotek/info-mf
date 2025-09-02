import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlightsSearchComponent } from './flights-search.component';
import { FLIGHTS_ROUTES } from './flights.routes';
import { FlightsListComponent } from './flights-list.component';
import { FlightsService } from './flights.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    FlightsListComponent,
    FlightsSearchComponent,
  ],
  providers: [FlightsService],
})
export class FlightsModule {}
