import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
Body;

@Controller('auth')
export class AuthController {
  constructor(private usersService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return { user: req.user, message: 'Login berhasil!' };
  }

  @Post('register')
  async register(@Body() user: RegisterDto) {
    const registeredUser = await this.usersService.findOneByEmail(user.email);
    if (registeredUser) {
      throw new BadRequestException('Email sudah terdaftar');
    }

    await this.usersService.createUser(user);
    return { message: 'Register berhasil' };
  }

  @UseGuards(AuthenticatedGuard)
  @Post('logout')
  async logout(@Request() req) {
    req.logout(function (err) {
      if (err) {
        throw new InternalServerErrorException();
      }
    });
    return { message: 'Logout berhasil!' };
  }
}
