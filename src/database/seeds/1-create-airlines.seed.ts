import { Airline } from '../../../entities/airline.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateAirlines implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Airline)
      .values([
        {
          name: 'Garuda',
          image:
            'https://upload.wikimedia.org/wikipedia/id/f/fe/Garuda_Indonesia_Logo.svg',
        },
        {
          name: 'Lion Air',
          image: 'https://upload.wikimedia.org/wikipedia/id/5/59/Lion_Air.svg',
        },
        {
          name: 'Citilink',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/d/d4/2012_Citilink_Logo.svg',
        },
      ])
      .execute();
  }
}
