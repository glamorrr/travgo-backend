import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const envModule = ConfigModule.forRoot({
  isGlobal: true,
});
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import typeOrmConfig from './config/typeorm.config';
import { FlightModule } from './flight/flight.module';
import { TicketModule } from './book-ticket/ticket.module';

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    FlightModule,
    TicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
