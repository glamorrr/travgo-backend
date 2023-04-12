import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Flight } from '../../entities/flight.entity';
import { FlightClass } from '../../entities/flight-class.entity';
import { FlightSeat } from '../../entities/flight-seat.entity';
import { Airline } from '../../entities/airline.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  ssl: process.env.NODE_ENV === 'production',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  synchronize: true,
  entities: [User, Flight, FlightClass, FlightSeat, Airline],
};

export default typeOrmConfig;
