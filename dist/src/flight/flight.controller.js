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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_ts_1 = require("./flight.service.ts");
common_1.Body;
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async getAllFlights(query) {
        const flights = await this.flightService.getAllflights(query);
        const result = [];
        flights.forEach((flight) => {
            flight.classes.forEach((flightClass) => {
                result.push(Object.assign(Object.assign({}, flight), { class: Object.assign({}, flightClass), classes: undefined }));
            });
        });
        return result;
    }
    async getFlightById(params) {
        const id = params.id;
        const flight = await this.flightService.getFlightById(id);
        return flight;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getAllFlights", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getFlightById", null);
FlightController = __decorate([
    (0, common_1.Controller)('flights'),
    __metadata("design:paramtypes", [flight_service_ts_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map