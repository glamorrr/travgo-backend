import { Flight } from '../../../entities/flight.entity';
import { Airline } from '../../../entities/airline.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateFlights implements Seeder {
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

    await connection
      .createQueryBuilder()
      .insert()
      .into(Flight)
      .values([
        {
          departureTime: new Date(Date.UTC(2023, 5, 1, 8, 0)),
          arrivalTime: new Date(Date.UTC(2023, 5, 1, 11, 30)),
          fromCode: 'CGK',
          toCode: 'DPS',
          fromPlace: 'Jakarta',
          toPlace: 'Denpasar',
          airline: garuda,
        },
        {
          departureTime: new Date(Date.UTC(2023, 5, 1, 9, 15)),
          arrivalTime: new Date(Date.UTC(2023, 5, 1, 11, 45)),
          fromCode: 'CGK',
          toCode: 'DPS',
          fromPlace: 'Jakarta',
          toPlace: 'Denpasar',
          airline: lion,
        },
        {
          departureTime: new Date(Date.UTC(2023, 5, 1, 10, 30)),
          arrivalTime: new Date(Date.UTC(2023, 5, 1, 12, 20)),
          fromCode: 'CGK',
          toCode: 'DPS',
          fromPlace: 'Jakarta',
          toPlace: 'Denpasar',
          airline: citilink,
        },
      ])
      .execute();
  }
}
