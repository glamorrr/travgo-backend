import { FlightClass } from './flight-class.entity';
import { Airline } from './airline.entity';
export declare class Flight {
    id: string;
    fromPlace: string;
    toPlace: string;
    fromCode: string;
    toCode: string;
    departureTime: Date;
    arrivalTime: Date;
    classes: FlightClass[];
    airline: Airline;
}
