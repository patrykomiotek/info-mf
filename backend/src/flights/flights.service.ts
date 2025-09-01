import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { Flight } from './dtos/Flight.dto';

@Injectable()
export class FlightsService {
  private flights: Flight[] = [
    {
      id: faker.number.int(),
      name: `${faker.location.city()} - ${faker.location.city()}`,
      description: faker.lorem.sentence(),
    },
    {
      id: faker.number.int(),
      name: `${faker.location.city()} - ${faker.location.city()}`,
      description: faker.lorem.sentence(),
    },
    {
      id: faker.number.int(),
      name: `${faker.location.city()} - ${faker.location.city()}`,
      description: faker.lorem.sentence(),
    },
  ];

  getFlights() {
    return this.flights;
  }

  getFlightById(id: number) {
    return this.flights.find((flight) => flight.id === id);
  }
}
