import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookedTicket } from 'entities/booked-ticket.entity';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { FlightSeat } from 'entities/flight-seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlightSeat, BookedTicket])],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule {}
