import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Flight } from './dtos/Flight.dto';
import { FlightsService } from './flights.service';

@Component({
  selector: 'flight-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div>
      <h2 class="text-2xl font-bold">Flight Details</h2>
      @if (flight) {
      <div>
        <p><strong>ID:</strong> {{ flight.id }}</p>
        <p><strong>Name:</strong> {{ flight.name }}</p>
        <p><strong>Description:</strong> {{ flight.description }}</p>
        <a [routerLink]="['/flights']" class="text-blue-500">Back to flights</a>
      </div>
      } @else {
      <p>Flight not found</p>
      }
    </div>
  `,
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight | undefined = undefined;

  constructor(private flightsService: FlightsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const flightId = +params['id'];
      this.flight = this.flightsService.getFlightById(flightId);
    });
  }
}
