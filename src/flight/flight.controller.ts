import { Controller, Body, Get, Query, Param } from '@nestjs/common';
import { User } from 'src/decorator/user.decorator';
import { User as UserEntity } from 'entities/user.entity';
import { FlightService } from './flight.service.ts';
Body;

@Controller('flights')
export class FlightController {
  constructor(private flightService: FlightService) {}

  @Get()
  async getAllFlights(@Query() query) {
    const flights = await this.flightService.getAllflights(query);
    const result = [];
    flights.forEach((flight) => {
      flight.classes.forEach((flightClass) => {
        result.push({
          ...flight,
          class: {
            ...flightClass,
          },
          classes: undefined,
        });
      });
    });
    return result;
  }

  @Get(':id')
  async getFlightById(@Param() params: any) {
    const id = params.id;
    const flight = await this.flightService.getFlightById(id);
    return flight;
  }
}
