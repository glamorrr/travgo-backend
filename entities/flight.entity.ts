import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { FlightClass } from './flight-class.entity';
import { Airline } from './airline.entity';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fromPlace: string;

  @Column()
  toPlace: string;

  @Column()
  fromCode: string;

  @Column()
  toCode: string;

  @Column({ type: 'timestamptz' })
  departureTime: Date;

  @Column({ type: 'timestamptz' })
  arrivalTime: Date;

  @OneToMany(() => FlightClass, (flightClass) => flightClass.flight)
  classes: Flight[];

  @ManyToOne(() => Airline, (airline) => airline.flights)
  airline: Airline;
}
