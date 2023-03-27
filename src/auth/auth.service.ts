import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, plainTextPassword: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    const isPasswordValid = await bcrypt.compare(
      plainTextPassword,
      user.password,
    );

    if (user && isPasswordValid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}