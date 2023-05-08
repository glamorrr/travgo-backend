import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { FlightClass } from './flight-class.entity';
import { BookedTicket } from './booked-ticket.entity';

@Entity()
export class FlightSeat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => FlightClass, (flightClass) => flightClass.seats)
  class: FlightClass;

  @OneToOne(() => BookedTicket, (ticket) => ticket.seat)
  ticket: BookedTicket;
}
