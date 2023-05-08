import { FlightSeat } from './flight-seat.entity';
import { User } from './user.entity';
export declare class BookedTicket {
    id: string;
    pricePaid: number;
    paidDate: Date;
    passengerName: string;
    seat: FlightSeat;
    user: User;
}
