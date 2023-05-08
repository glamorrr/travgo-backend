import {
  Controller,
  Body,
  Get,
  Query,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/decorator/user.decorator';
import { User as UserEntity } from 'entities/user.entity';
import { BookTicketDto } from './dto/book-ticket.dto.js';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { TicketService } from './ticket.service.js';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @UseGuards(AuthenticatedGuard)
  @Post(':flightId')
  async bookAirplaneTicket(
    @Param() params: any,
    @Body() body: BookTicketDto,
    @User() user: UserEntity,
  ) {
    const seat = await this.ticketService.getAvailableSeat(params.flightId);
    const ticket = await this.ticketService.createTicket({
      passengerName: body.passengerName,
      seatId: seat.id,
      userId: user.id,
    });
    return ticket;
  }

  @UseGuards(AuthenticatedGuard)
  @Get(':ticketId')
  async getBookedTicket(@Param() params: any, @User() user: UserEntity) {
    const ticket = await this.ticketService.getBookedTicket({
      ticketId: params.ticketId,
      userId: user.id,
    });

    return ticket;
  }
}
