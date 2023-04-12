"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_entity_1 = require("../../../entities/flight.entity");
const airline_entity_1 = require("../../../entities/airline.entity");
class CreateAirlines {
    async run(factory, connection) {
        await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
        const garuda = await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder('airline')
            .where('airline.name = :name', { name: 'Garuda' })
            .getOne();
        await connection
            .createQueryBuilder()
            .insert()
            .into(flight_entity_1.Flight)
            .values([
            {
                departureTime: new Date(Date.UTC(2023, 3, 4, 8, 0)),
                arrivalTime: new Date(Date.UTC(2023, 3, 4, 11, 30)),
                fromCode: 'CGK',
                toCode: 'DPS',
                fromPlace: 'Jakarta',
                toPlace: 'Denpasar',
                airline: garuda,
            },
        ])
            .execute();
    }
}
exports.default = CreateAirlines;
//# sourceMappingURL=2-create-flights.seed%20copy.js.map