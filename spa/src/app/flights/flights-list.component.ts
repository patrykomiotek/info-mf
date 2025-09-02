import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { FlightsService } from './flights.service';
import { Flight } from './dtos/Flight.dto';
import { ReserveFlightComponent } from '../reservation/reserve-flight.component';
@Component({
  selector: 'flights-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ReserveFlightComponent],
  templateUrl: './flight-list.html',
})
export class FlightsListComponent {
  private flightsService = inject(FlightsService);
  flights$!: Observable<Flight[]>;

  constructor() {
    effect(() => {
      this.flights$ = this.flightsService.getFlights();
    });
  }
}
