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
            {
                name: 'Garuda',
                image: 'https://upload.wikimedia.org/wikipedia/id/f/fe/Garuda_Indonesia_Logo.svg',
            },
            {
                name: 'Lion Air',
                image: 'https://upload.wikimedia.org/wikipedia/id/5/59/Lion_Air.svg',
            },
            {
                name: 'Citilink',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/2012_Citilink_Logo.svg',
            },
        ])
            .execute();
    }
}
exports.default = CreateAirlines;
//# sourceMappingURL=1-create-airlines.seed.js.map