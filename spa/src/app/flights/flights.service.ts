import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor() {}

  getFlights() {
    return [
      { id: 1, name: 'Flight 1' },
      { id: 2, name: 'Flight 2' },
    ];
  }
}
