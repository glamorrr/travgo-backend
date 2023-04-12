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
        const garudeFlightFromJakartaToDenpasar = await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder('flight')
            .where('flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId', {
            fromPlace: 'Jakarta',
            toPlace: 'Denpasar',
            airlineId: garuda.id,
        })
            .getOne();
        await connection
            .createQueryBuilder()
            .insert()
            .into(flight_class_entity_1.FlightClass)
            .values([
            {
                name: 'Ekonomi',
                price: 1500000,
                flight: garudeFlightFromJakartaToDenpasar,
            },
        ])
            .execute();
    }
}
exports.default = CreateFlightClasses;
//# sourceMappingURL=3-create-flight-seats.seed.js.map