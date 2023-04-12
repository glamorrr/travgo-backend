import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FlightClass } from './flight-class.entity';

@Entity()
export class FlightSeat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => FlightClass, (flightClass) => flightClass.seats)
  class: FlightClass;
}
