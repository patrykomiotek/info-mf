import { Component } from '@angular/core';
import { FlightsService } from './flights.service';
import { Flight } from './dtos/Flight.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flights-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-list.html',
})
export class FlightsListComponent {
  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) {
    this.flights = this.flightsService.getFlights();
  }
}
