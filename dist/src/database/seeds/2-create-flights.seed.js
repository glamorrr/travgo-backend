"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_entity_1 = require("../../../entities/flight.entity");
const airline_entity_1 = require("../../../entities/airline.entity");
class CreateFlights {
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
            {
                departureTime: new Date(Date.UTC(2023, 3, 4, 9, 15)),
                arrivalTime: new Date(Date.UTC(2023, 3, 4, 11, 45)),
                fromCode: 'BDO',
                toCode: 'LOP',
                fromPlace: 'Bandung',
                toPlace: 'Praya',
                airline: lion,
            },
            {
                departureTime: new Date(Date.UTC(2023, 3, 4, 10, 30)),
                arrivalTime: new Date(Date.UTC(2023, 3, 4, 12, 20)),
                fromCode: 'SUB',
                toCode: 'KNU',
                fromPlace: 'Surabaya',
                toPlace: 'Kanpur',
                airline: citilink,
            },
        ])
            .execute();
    }
}
exports.default = CreateFlights;
//# sourceMappingURL=2-create-flights.seed.js.map