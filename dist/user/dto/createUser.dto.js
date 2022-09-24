"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const customer_entity_1 = require("../../database/entities/customer.entity");
class CreateUserDto extends (0, swagger_1.PickType)(customer_entity_1.CustomerEntity, [
    `password`,
    `id`,
    `name`,
    `phone_number`,
]) {
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=createUser.dto.js.map