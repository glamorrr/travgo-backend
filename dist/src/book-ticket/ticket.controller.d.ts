import { User as UserEntity } from 'entities/user.entity';
import { BookTicketDto } from './dto/book-ticket.dto.js';
import { TicketService } from './ticket.service.js';
export declare class TicketController {
    private ticketService;
    constructor(ticketService: TicketService);
    bookAirplaneTicket(params: any, body: BookTicketDto, user: UserEntity): Promise<import("../../entities/booked-ticket.entity.js").BookedTicket>;
    getBookedTicket(params: any, user: UserEntity): Promise<import("../../entities/booked-ticket.entity.js").BookedTicket>;
}
