import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private usersService;
    constructor(usersService: UserService);
    login(req: any): Promise<{
        user: any;
        message: string;
    }>;
    register(user: RegisterDto): Promise<{
        message: string;
    }>;
}
