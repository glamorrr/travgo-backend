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
exports.FlightSeat = void 0;
const typeorm_1 = require("typeorm");
const flight_class_entity_1 = require("./flight-class.entity");
let FlightSeat = class FlightSeat {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FlightSeat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FlightSeat.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_class_entity_1.FlightClass, (flightClass) => flightClass.seats),
    __metadata("design:type", flight_class_entity_1.FlightClass)
], FlightSeat.prototype, "class", void 0);
FlightSeat = __decorate([
    (0, typeorm_1.Entity)()
], FlightSeat);
exports.FlightSeat = FlightSeat;
//# sourceMappingURL=flight-seat.entity.js.map