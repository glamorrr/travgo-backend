import { UserService } from '../user/user.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    validateUser(email: string, plainTextPassword: string): Promise<any>;
}
