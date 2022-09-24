import { LoginRequestDto } from './dto/login.request.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    jwtLogIn(dto: LoginRequestDto): Promise<{
        token: string;
    }>;
}
