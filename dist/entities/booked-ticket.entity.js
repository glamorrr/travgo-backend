"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookedTicket = void 0;
const typeorm_1 = require("typeorm");
const flight_seat_entity_1 = require("./flight-seat.entity");
const user_entity_1 = require("./user.entity");
let BookedTicket = class BookedTicket {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BookedTicket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], BookedTicket.prototype, "pricePaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], BookedTicket.prototype, "paidDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookedTicket.prototype, "passengerName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => flight_seat_entity_1.FlightSeat, (seat) => seat.ticket),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", flight_seat_entity_1.FlightSeat)
], BookedTicket.prototype, "seat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.bookedTickets),
    __metadata("design:type", user_entity_1.User)
], BookedTicket.prototype, "user", void 0);
BookedTicket = __decorate([
    (0, typeorm_1.Entity)()
], BookedTicket);
exports.BookedTicket = BookedTicket;
//# sourceMappingURL=booked-ticket.entity.js.map