import { Flight } from '../../../entities/flight.entity';
import { Airline } from '../../../entities/airline.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { FlightClass } from '../../../entities/flight-class.entity';

export default class CreateFlightClasses implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const garuda = await connection
      .getRepository(Airline)
      .createQueryBuilder('airline')
      .where('airline.name = :name', { name: 'Garuda' })
      .getOne();

    const lion = await connection
      .getRepository(Airline)
      .createQueryBuilder('airline')
      .where('airline.name = :name', { name: 'Lion Air' })
      .getOne();

    const citilink = await connection
      .getRepository(Airline)
      .createQueryBuilder('airline')
      .where('airline.name = :name', { name: 'Citilink' })
      .getOne();

    const garudaFlightFromJakartaToDenpasar = await connection
      .getRepository(Flight)
      .createQueryBuilder('flight')
      .where(
        'flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId',
        {
          fromPlace: 'Jakarta',
          toPlace: 'Denpasar',
          airlineId: garuda.id,
        },
      )
      .getOne();

    const lionFlightFromBandungToPraya = await connection
      .getRepository(Flight)
      .createQueryBuilder('flight')
      .where(
        'flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId',
        {
          fromPlace: 'Bandung',
          toPlace: 'Praya',
          airlineId: lion.id,
        },
      )
      .getOne();

    const citilinkFlightFromSurabayaToKanpur = await connection
      .getRepository(Flight)
      .createQueryBuilder('flight')
      .where(
        'flight.fromPlace = :fromPlace AND flight.toPlace= :toPlace AND flight.airlineId = :airlineId',
        {
          fromPlace: 'Surabaya',
          toPlace: 'Kanpur',
          airlineId: citilink.id,
        },
      )
      .getOne();

    await connection
      .createQueryBuilder()
      .insert()
      .into(FlightClass)
      .values([
        {
          name: 'Economy',
          price: 1500000,
          flight: garudaFlightFromJakartaToDenpasar,
        },
        {
          name: 'Economy',
          price: 850000,
          flight: lionFlightFromBandungToPraya,
        },
        {
          name: 'Economy',
          price: 650000,
          flight: citilinkFlightFromSurabayaToKanpur,
        },
      ])
      .execute();
  }
}
