"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flight_seat_entity_1 = require("../../../entities/flight-seat.entity");
const airline_entity_1 = require("../../../entities/airline.entity");
const flight_class_entity_1 = require("../../../entities/flight-class.entity");
const flight_entity_1 = require("../../../entities/flight.entity");
const booked_ticket_entity_1 = require("../../../entities/booked-ticket.entity");
class DeleteAll {
    async run(factory, connection) {
        await connection
            .getRepository(booked_ticket_entity_1.BookedTicket)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
        await connection
            .getRepository(flight_seat_entity_1.FlightSeat)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
        await connection
            .getRepository(flight_class_entity_1.FlightClass)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
        await connection
            .getRepository(flight_entity_1.Flight)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
        await connection
            .getRepository(airline_entity_1.Airline)
            .createQueryBuilder()
            .delete()
            .where('true')
            .execute();
    }
}
exports.default = DeleteAll;
//# sourceMappingURL=0-delete-all.seed.js.map