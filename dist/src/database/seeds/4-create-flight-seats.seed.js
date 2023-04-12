"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_entity_1 = require("../../../entities/flight.entity");
const airline_entity_1 = require("../../../entities/airline.entity");
const flight_class_entity_1 = require("../../../entities/flight-class.entity");
const flight_seat_entity_1 = require("../../../entities/flight-seat.entity");
class CreateFlightSeats {
    async run(factory, connection) {
        const garuda = await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder('airline')
            .where('airline.name = :name', { name: 'Garuda' })
            .getOne();
        const garudaEkonomiFlightFromJakartaToDenpasar = await connection
            .getRepository(flight_class_entity_1.FlightClass)
            .createQueryBuilder('class')
            .innerJoinAndSelect(flight_entity_1.Flight, 'flight', 'class.flightId = flight.id')
            .where('flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId AND class.name = :name', {
            fromPlace: 'Jakarta',
            toPlace: 'Denpasar',
            airlineId: garuda.id,
            name: 'Economy',
        })
            .getOne();
        await connection
            .createQueryBuilder()
            .insert()
            .into(flight_seat_entity_1.FlightSeat)
            .values([
            {
                number: 'C1',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C2',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C3',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
        ])
            .execute();
    }
}
exports.default = CreateFlightSeats;
//# sourceMappingURL=4-create-flight-seats.seed.js.map