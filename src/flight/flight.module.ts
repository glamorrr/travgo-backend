import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightService } from './flight.service.ts';
import { Flight } from 'entities/flight.entity';
import { FlightController } from './flight.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  providers: [FlightService],
  controllers: [FlightController],
})
export class FlightModule {}
