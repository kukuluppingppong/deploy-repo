/// <reference types="multer" />
import { AuthService } from '../auth/auth.service';
import { LoginRequestDto } from '../auth/dto/login.request.dto';
import { CustomerEntity } from '../database/entities/customer.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    getUser(user: CustomerEntity): Promise<CustomerEntity>;
    auth_test(user: CustomerEntity): Promise<string>;
    getOne(userId: number): Promise<CustomerEntity>;
    logIn(dto: LoginRequestDto): Promise<{
        token: string;
    }>;
    create(dto: CreateUserDto): Promise<{
        password: any;
        id: string;
        name: string;
        phone_number: string;
    } & CustomerEntity>;
    update(user: CustomerEntity, dto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    delete(user: CustomerEntity): Promise<import("typeorm").DeleteResult>;
    setProfileImage(file: Express.Multer.File, user: CustomerEntity): Promise<import("typeorm").UpdateResult>;
}
