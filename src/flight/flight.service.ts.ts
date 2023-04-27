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
      .where('flight.fromPlace = :fromPlace', { fromPlace })
      .andWhere('flight.toPlace = :toPlace', { toPlace })
      .andWhere('CAST(flight.departureTime AS DATE) = :departureTime', {
        departureTime,
      })
      .andWhere('classes.name = :flightClass', { flightClass })
      .getMany();
  }
}
