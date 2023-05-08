import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookedTicket } from 'entities/booked-ticket.entity';
import { FlightSeat } from 'entities/flight-seat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(FlightSeat)
    private seatRepository: Repository<FlightSeat>,
    @InjectRepository(BookedTicket)
    private ticketRepository: Repository<BookedTicket>,
  ) {}

  async getAvailableSeat(id: string) {
    const seats = await this.seatRepository
      .createQueryBuilder('seat')
      .leftJoinAndSelect('seat.class', 'classes')
      .leftJoinAndSelect('seat.ticket', 'ticket')
      .leftJoinAndSelect('classes.flight', 'flight')
      .where('flight.id = :id', { id })
      .andWhere('LOWER(classes.name) = LOWER(:flightClass)', {
        flightClass: 'Economy',
      })
      .getMany();

    return seats.find((seat) => !seat.ticket);
  }

  async createTicket({
    passengerName,
    seatId,
    userId,
  }: {
    passengerName: string;
    seatId: string;
    userId: string;
  }) {
    const ticket = this.ticketRepository.create({
      passengerName,
      seat: { id: seatId },
      user: { id: userId },
    });
    return this.ticketRepository.save(ticket);
  }

  async getBookedTicket({
    ticketId,
    userId,
  }: {
    ticketId: string;
    userId: string;
  }) {
    const ticket = await this.ticketRepository.findOne({
      where: { id: ticketId, user: { id: userId } },
      relations: {
        seat: {
          class: true,
        },
      },
    });

    if (!ticket) throw new NotFoundException('ticket not found');

    return ticket;
  }
}
