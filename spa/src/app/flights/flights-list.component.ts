import { Component, inject, OnInit } from '@angular/core';
import { FlightsService } from './flights.service';
import { Flight } from './dtos/Flight.dto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flights-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './flight-list.html',
})
export class FlightsListComponent implements OnInit {
  private flightsService = inject(FlightsService);
  flights: Flight[] = [];

  ngOnInit() {
    this.flightsService.getFlights().subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (error) => {
        console.error('Error fetching flights:', error);
        // You could set an error state here
      },
    });
  }
}
