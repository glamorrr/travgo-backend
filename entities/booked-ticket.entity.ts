import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { FlightSeat } from './flight-seat.entity';
import { User } from './user.entity';

@Entity()
export class BookedTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  pricePaid: number;

  @Column({ type: 'timestamptz', nullable: true })
  paidDate: Date;

  @Column()
  passengerName: string;

  @OneToOne(() => FlightSeat, (seat) => seat.ticket)
  @JoinColumn()
  seat: FlightSeat;

  @ManyToOne(() => User, (user) => user.bookedTickets)
  user: User;
}
