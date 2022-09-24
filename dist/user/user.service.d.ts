/// <reference types="multer" />
import { CustomerEntity } from '../database/entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { AwsProvider } from '../aws/aws.provider';
export declare class UserService {
    private customerRepository;
    private awsProvider;
    constructor(customerRepository: Repository<CustomerEntity>, awsProvider: AwsProvider);
    getOneWithId(userId: number): Promise<CustomerEntity>;
    getOneWithUserId(id: string): Promise<CustomerEntity>;
    signUp(dto: CreateUserDto): Promise<{
        password: any;
        id: string;
        name: string;
        phone_number: string;
    } & CustomerEntity>;
    update(userId: number, dto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    delete(userId: number): Promise<import("typeorm").DeleteResult>;
    setProfileImage(userId: number, file: Express.Multer.File): Promise<import("typeorm").UpdateResult>;
}
