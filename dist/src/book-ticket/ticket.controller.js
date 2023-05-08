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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorator/user.decorator");
const user_entity_1 = require("../../entities/user.entity");
const book_ticket_dto_js_1 = require("./dto/book-ticket.dto.js");
const authenticated_guard_1 = require("../auth/guards/authenticated.guard");
const ticket_service_js_1 = require("./ticket.service.js");
let TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async bookAirplaneTicket(params, body, user) {
        const seat = await this.ticketService.getAvailableSeat(params.flightId);
        const ticket = await this.ticketService.createTicket({
            passengerName: body.passengerName,
            seatId: seat.id,
            userId: user.id,
        });
        return ticket;
    }
    async getBookedTicket(params, user) {
        const ticket = await this.ticketService.getBookedTicket({
            ticketId: params.ticketId,
            userId: user.id,
        });
        return ticket;
    }
};
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)(':flightId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, book_ticket_dto_js_1.BookTicketDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "bookAirplaneTicket", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)(':ticketId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getBookedTicket", null);
TicketController = __decorate([
    (0, common_1.Controller)('ticket'),
    __metadata("design:paramtypes", [ticket_service_js_1.TicketService])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map