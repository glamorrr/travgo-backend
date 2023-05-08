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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const booked_ticket_entity_1 = require("../../entities/booked-ticket.entity");
const flight_seat_entity_1 = require("../../entities/flight-seat.entity");
const typeorm_2 = require("typeorm");
let TicketService = class TicketService {
    constructor(seatRepository, ticketRepository) {
        this.seatRepository = seatRepository;
        this.ticketRepository = ticketRepository;
    }
    async getAvailableSeat(id) {
        const seats = await this.seatRepository
            .createQueryBuilder('seat')
            .leftJoinAndSelect('seat.class', 'classes')
            .leftJoinAndSelect('seat.ticket', 'ticket')
            .leftJoinAndSelect('classes.flight', 'flight')
            .where('flight.id = :id', { id })
            .andWhere('LOWER(classes.name) = LOWER(:flightClass)', {
            flightClass: 'Economy',
        })
            .getMany();
        return seats.find((seat) => !seat.ticket);
    }
    async createTicket({ passengerName, seatId, userId, }) {
        const ticket = this.ticketRepository.create({
            passengerName,
            seat: { id: seatId },
            user: { id: userId },
        });
        return this.ticketRepository.save(ticket);
    }
    async getBookedTicket({ ticketId, userId, }) {
        const ticket = await this.ticketRepository.findOne({
            where: { id: ticketId, user: { id: userId } },
            relations: {
                seat: {
                    class: true,
                },
            },
        });
        if (!ticket)
            throw new common_1.NotFoundException('ticket not found');
        return ticket;
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_seat_entity_1.FlightSeat)),
    __param(1, (0, typeorm_1.InjectRepository)(booked_ticket_entity_1.BookedTicket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map