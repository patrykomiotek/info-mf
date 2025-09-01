import { Controller, Get, Param } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  getFlights() {
    return this.flightsService.getFlights();
  }

  @Get(':id')
  getFlightById(@Param('id') id: string) {
    return this.flightsService.getFlightById(+id);
  }
}
