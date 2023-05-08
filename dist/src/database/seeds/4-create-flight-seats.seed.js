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
            {
                number: 'C4',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C5',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C6',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C7',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C8',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C9',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C10',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C123451',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C12452',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C24523413',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1543254',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C23414',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1662344',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C11234',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C3214',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1344',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1724',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1334',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C2714',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C15164',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C11344',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1334',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C11234',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C15234',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C3114',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C13124',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C3114',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C13124',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1234',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C114',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
            {
                number: 'C1214',
                class: garudaEkonomiFlightFromJakartaToDenpasar,
            },
        ])
            .execute();
    }
}
exports.default = CreateFlightSeats;
//# sourceMappingURL=4-create-flight-seats.seed.js.map