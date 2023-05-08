"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../entities/user.entity");
const flight_entity_1 = require("../../entities/flight.entity");
const flight_class_entity_1 = require("../../entities/flight-class.entity");
const flight_seat_entity_1 = require("../../entities/flight-seat.entity");
const airline_entity_1 = require("../../entities/airline.entity");
const booked_ticket_entity_1 = require("../../entities/booked-ticket.entity");
const typeOrmConfig = {
    type: 'postgres',
    port: 5432,
    ssl: true,
    username: 'travgo_admin',
    password: 'Fd5GoQuXYUVB0dOYJhjJsD9M8xSGQ1ih',
    database: 'travgo_backend',
    host: 'dpg-cggkeckeoogqfc2vc1ag-a.oregon-postgres.render.com',
    synchronize: true,
    entities: [user_entity_1.User, flight_entity_1.Flight, flight_class_entity_1.FlightClass, flight_seat_entity_1.FlightSeat, airline_entity_1.Airline, booked_ticket_entity_1.BookedTicket],
};
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm-seed-prod.config.js.map