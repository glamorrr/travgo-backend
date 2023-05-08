import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'entities/flight.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  async getAllflights({
    fromPlace,
    toPlace,
    flightClass,
    departureTime,
  }: {
    fromPlace: string;
    toPlace: string;
    flightClass: string;
    departureTime: string;
  }) {
    return this.flightRepository
      .createQueryBuilder('flight')
      .leftJoinAndSelect('flight.airline', 'airline')
      .leftJoinAndSelect('flight.classes', 'classes')
      .where('LOWER(flight.fromPlace) = LOWER(:fromPlace)', { fromPlace })
      .andWhere('LOWER(flight.toPlace) = LOWER(:toPlace)', { toPlace })
      .andWhere('CAST(flight.departureTime AS DATE) = :departureTime', {
        departureTime,
      })
      .andWhere('LOWER(classes.name) = LOWER(:flightClass)', { flightClass })
      .getMany();
  }

  async getFlightById(id: string) {
    return this.flightRepository
      .createQueryBuilder('flight')
      .leftJoinAndSelect('flight.airline', 'airline')
      .leftJoinAndSelect('flight.classes', 'classes')
      .leftJoinAndSelect('classes.seats', 'seats')
      .where('flight.id = :id', { id })
      .andWhere('LOWER(classes.name) = LOWER(:flightClass)', {
        flightClass: 'Economy',
      })
      .getOne();
  }
}
