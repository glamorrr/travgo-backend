"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const booked_ticket_entity_1 = require("../../entities/booked-ticket.entity");
const ticket_service_1 = require("./ticket.service");
const ticket_controller_1 = require("./ticket.controller");
const flight_seat_entity_1 = require("../../entities/flight-seat.entity");
let TicketModule = class TicketModule {
};
TicketModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([flight_seat_entity_1.FlightSeat, booked_ticket_entity_1.BookedTicket])],
        providers: [ticket_service_1.TicketService],
        controllers: [ticket_controller_1.TicketController],
    })
], TicketModule);
exports.TicketModule = TicketModule;
//# sourceMappingURL=ticket.module.js.map