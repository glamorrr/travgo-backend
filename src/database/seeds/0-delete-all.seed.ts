import { FlightSeat } from '../../../entities/flight-seat.entity';
import { Airline } from '../../../entities/airline.entity';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { FlightClass } from '../../../entities/flight-class.entity';
import { Flight } from '../../../entities/flight.entity';
import { BookedTicket } from '../../../entities/booked-ticket.entity';

export default class DeleteAll implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .getRepository(BookedTicket)
      .createQueryBuilder()
      .delete()
      .where('true')
      .execute();

    await connection
      .getRepository(FlightSeat)
      .createQueryBuilder()
      .delete()
      .where('true')
      .execute();

    await connection
      .getRepository(FlightClass)
      .createQueryBuilder()
      .delete()
      .where('true')
      .execute();

    await connection
      .getRepository(Flight)
      .createQueryBuilder()
      .delete()
      .where('true')
      .execute();

    await connection
      .getRepository(Airline)
      .createQueryBuilder()
      .delete()
      .where('true')
      .execute();
  }
}
