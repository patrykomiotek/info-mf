import { Component } from '@angular/core';
import { FlightsListComponent } from './flights-list.component';

@Component({
  selector: 'flights-page',
  standalone: true,
  templateUrl: './flights-page.html',
  imports: [FlightsListComponent],
})
export class FlightsPageComponent {}
