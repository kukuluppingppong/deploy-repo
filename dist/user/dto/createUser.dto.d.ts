import { CustomerEntity } from '../../database/entities/customer.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<CustomerEntity, "id" | "name" | "phone_number" | "password">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
