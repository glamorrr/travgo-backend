import { Controller, Request, UseGuards, Body, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { User } from 'src/decorator/user.decorator';
import { User as UserEntity } from 'entities/user.entity';
Body;

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  async getProfile(@User() user: UserEntity) {
    return { user };
  }
}
