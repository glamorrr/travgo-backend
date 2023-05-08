import { BookedTicket } from 'entities/booked-ticket.entity';
import { FlightSeat } from 'entities/flight-seat.entity';
import { Repository } from 'typeorm';
export declare class TicketService {
    private seatRepository;
    private ticketRepository;
    constructor(seatRepository: Repository<FlightSeat>, ticketRepository: Repository<BookedTicket>);
    getAvailableSeat(id: string): Promise<FlightSeat>;
    createTicket({ passengerName, seatId, userId, }: {
        passengerName: string;
        seatId: string;
        userId: string;
    }): Promise<BookedTicket>;
    getBookedTicket({ ticketId, userId, }: {
        ticketId: string;
        userId: string;
    }): Promise<BookedTicket>;
}
