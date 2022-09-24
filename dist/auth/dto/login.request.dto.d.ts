import { CustomerEntity } from '../../database/entities/customer.entity';
declare const LoginRequestDto_base: import("@nestjs/common").Type<Pick<CustomerEntity, "id" | "password">>;
export declare class LoginRequestDto extends LoginRequestDto_base {
}
export {};
