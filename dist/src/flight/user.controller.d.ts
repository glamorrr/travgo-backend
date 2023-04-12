import { UserService } from 'src/user/user.service';
import { User as UserEntity } from 'entities/user.entity';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    getProfile(user: UserEntity): Promise<{
        user: UserEntity;
    }>;
}
