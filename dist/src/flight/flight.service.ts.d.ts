import { Flight } from 'entities/flight.entity';
import { Repository } from 'typeorm';
export declare class FlightService {
    private flightRepository;
    constructor(flightRepository: Repository<Flight>);
    getAllflights(): Promise<Flight[]>;
}
