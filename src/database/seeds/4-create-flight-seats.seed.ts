import { Flight } from '../../../entities/flight.entity';
import { Airline } from '../../../entities/airline.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { FlightClass } from '../../../entities/flight-class.entity';
import { FlightSeat } from '../../../entities/flight-seat.entity';

export default class CreateFlightSeats implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const garuda = await connection
      .getRepository(Airline)
      .createQueryBuilder('airline')
      .where('airline.name = :name', { name: 'Garuda' })
      .getOne();

    const garudaEkonomiFlightFromJakartaToDenpasar = await connection
      .getRepository(FlightClass)
      .createQueryBuilder('class')
      .innerJoinAndSelect(Flight, 'flight', 'class.flightId = flight.id')
      .where(
        'flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId AND class.name = :name',
        {
          fromPlace: 'Jakarta',
          toPlace: 'Denpasar',
          airlineId: garuda.id,
          name: 'Economy',
        },
      )
      .getOne();

    await connection
      .createQueryBuilder()
      .insert()
      .into(FlightSeat)
      .values([
        {
          number: 'C1',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C2',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C3',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
      ])
      .execute();
  }
}
