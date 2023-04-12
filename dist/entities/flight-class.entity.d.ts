import { Flight } from './flight.entity';
import { FlightSeat } from './flight-seat.entity';
export declare class FlightClass {
    id: string;
    name: string;
    price: number;
    flight: Flight;
    seats: FlightSeat[];
}
