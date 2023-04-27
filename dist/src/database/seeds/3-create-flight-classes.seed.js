"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_entity_1 = require("../../../entities/flight.entity");
const airline_entity_1 = require("../../../entities/airline.entity");
const flight_class_entity_1 = require("../../../entities/flight-class.entity");
class CreateFlightClasses {
    async run(factory, connection) {
        const garuda = await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder('airline')
            .where('airline.name = :name', { name: 'Garuda' })
            .getOne();
        const lion = await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder('airline')
            .where('airline.name = :name', { name: 'Lion Air' })
            .getOne();
        const citilink = await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder('airline')
            .where('airline.name = :name', { name: 'Citilink' })
            .getOne();
        const garudaFlightFromJakartaToDenpasar = await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder('flight')
            .where('flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId', {
            fromPlace: 'Jakarta',
            toPlace: 'Denpasar',
            airlineId: garuda.id,
        })
            .getOne();
        const lionFlightFromJakartaToDenpasar = await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder('flight')
            .where('flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId', {
            fromPlace: 'Jakarta',
            toPlace: 'Denpasar',
            airlineId: lion.id,
        })
            .getOne();
        const citilinkFlightFromJakartaToDenpasar = await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder('flight')
            .where('flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId', {
            fromPlace: 'Jakarta',
            toPlace: 'Denpasar',
            airlineId: citilink.id,
        })
            .getOne();
        await connection
            .createQueryBuilder()
            .insert()
            .into(flight_class_entity_1.FlightClass)
            .values([
            {
                name: 'Economy',
                price: 1500000,
                flight: garudaFlightFromJakartaToDenpasar,
            },
            {
                name: 'Economy',
                price: 850000,
                flight: lionFlightFromJakartaToDenpasar,
            },
            {
                name: 'Economy',
                price: 650000,
                flight: citilinkFlightFromJakartaToDenpasar,
            },
        ])
            .execute();
    }
}
exports.default = CreateFlightClasses;
//# sourceMappingURL=3-create-flight-classes.seed.js.map