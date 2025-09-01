import { Component } from '@angular/core';
import { FlightsListComponent } from './flights-list.component';

@Component({
  selector: 'flights-page',
  standalone: true,
  template: `<div>
    <h1>Flights</h1>
    <p>Welcome to the flights page</p>
    <flights-list />
  </div> `,
  imports: [FlightsListComponent],
})
export class FlightsPageComponent {}
