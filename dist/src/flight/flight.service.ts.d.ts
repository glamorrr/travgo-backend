import { Flight } from 'entities/flight.entity';
import { Repository } from 'typeorm';
export declare class FlightService {
    private flightRepository;
    constructor(flightRepository: Repository<Flight>);
    getAllflights({ fromPlace, toPlace, flightClass, departureTime, }: {
        fromPlace: string;
        toPlace: string;
        flightClass: string;
        departureTime: string;
    }): Promise<Flight[]>;
    getFlightById(id: string): Promise<Flight>;
}
