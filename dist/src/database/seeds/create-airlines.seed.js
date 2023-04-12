"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const airline_entity_1 = require("../../../entities/airline.entity");
class CreateAirlines {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(airline_entity_1.Airline)
            .values([
            { name: 'Garuda' },
            { name: 'Lion Air' },
            { name: 'Citilink' },
            { name: 'Air Asia' },
            { name: 'Sriwijaya' },
        ])
            .execute();
    }
}
exports.default = CreateAirlines;
//# sourceMappingURL=create-airlines.seed.js.map