import { FlightClass } from './flight-class.entity';
import { BookedTicket } from './booked-ticket.entity';
export declare class FlightSeat {
    id: string;
    number: string;
    class: FlightClass;
    ticket: BookedTicket;
}
