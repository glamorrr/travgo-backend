import { IsString } from 'class-validator';

export class BookTicketDto {
  @IsString()
  passengerName: string;
}
