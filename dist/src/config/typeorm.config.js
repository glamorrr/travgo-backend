"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../entities/user.entity");
const flight_entity_1 = require("../../entities/flight.entity");
const flight_class_entity_1 = require("../../entities/flight-class.entity");
const flight_seat_entity_1 = require("../../entities/flight-seat.entity");
const airline_entity_1 = require("../../entities/airline.entity");
const typeOrmConfig = {
    type: 'postgres',
    port: 5432,
    ssl: process.env.NODE_ENV === 'production',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    synchronize: true,
    entities: [user_entity_1.User, flight_entity_1.Flight, flight_class_entity_1.FlightClass, flight_seat_entity_1.FlightSeat, airline_entity_1.Airline],
};
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map