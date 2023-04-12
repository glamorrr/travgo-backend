import { User } from 'entities/user.entity';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneByEmail(email: string): Promise<User>;
    createUser(registerDto: RegisterDto): Promise<User>;
}
