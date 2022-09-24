import { Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
import { Payload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: Payload): Promise<import("../../database/entities/customer.entity").CustomerEntity>;
}
export {};
