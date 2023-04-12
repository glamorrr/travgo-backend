import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Flight } from './flight.entity';
import { FlightSeat } from './flight-seat.entity';

@Entity()
export class FlightClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Flight, (flight) => flight.classes)
  flight: Flight;

  @OneToMany(() => FlightSeat, (seat) => seat.class)
  seats: FlightSeat[];
}
