import { Injectable } from '@angular/core';
import { Flight } from './dtos/Flight.dto';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private flights: Flight[] = [
    { id: 1, name: 'Flight 1', description: 'First flight description' },
    { id: 2, name: 'Flight 2', description: 'Second flight description' },
  ];

  constructor() {}

  getFlights(): Flight[] {
    return this.flights;
  }

  getFlightById(id: number): Flight | undefined {
    return this.flights.find((flight) => flight.id === id);
  }
}
