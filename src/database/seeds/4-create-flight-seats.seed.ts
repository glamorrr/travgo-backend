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
        {
          number: 'C4',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C5',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C6',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C7',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C8',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C9',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C10',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C123451',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C12452',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C24523413',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1543254',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C23414',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1662344',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C11234',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C3214',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1344',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1724',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1334',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C2714',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C15164',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C11344',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1334',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C11234',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C15234',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C3114',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C13124',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C3114',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C13124',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1234',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C114',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
        {
          number: 'C1214',
          class: garudaEkonomiFlightFromJakartaToDenpasar,
        },
      ])
      .execute();
  }
}
