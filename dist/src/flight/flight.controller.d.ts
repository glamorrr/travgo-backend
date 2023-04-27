import { FlightService } from './flight.service.ts';
export declare class FlightController {
    private flightService;
    constructor(flightService: FlightService);
    getAllFlights(query: any): Promise<any[]>;
}
