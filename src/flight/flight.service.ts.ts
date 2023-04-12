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

  async getAllflights() {
    return this.flightRepository
      .createQueryBuilder('flight')
      .leftJoinAndSelect('flight.airline', 'airline')
      .leftJoinAndSelect('flight.classes', 'classes')
      .getMany();
  }
}
