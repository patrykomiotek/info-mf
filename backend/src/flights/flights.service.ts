import { Injectable } from '@nestjs/common';
import { Flight } from './dtos/Flight.dto';

@Injectable()
export class FlightsService {
  private flights: Flight[] = [
    { id: 1, name: 'Flight 1', description: 'Description 1' },
    { id: 2, name: 'Flight 2', description: 'Description 2' },
  ];

  getFlights() {
    return this.flights;
  }

  getFlightById(id: number) {
    return this.flights.find((flight) => flight.id === id);
  }
}
