import { BookedTicket } from './booked-ticket.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    phoneNumber: string;
    bookedTickets: BookedTicket[];
    hashPassword(): Promise<void>;
}
