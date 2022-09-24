"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const customer_entity_1 = require("../../database/entities/customer.entity");
class LoginRequestDto extends (0, swagger_1.PickType)(customer_entity_1.CustomerEntity, [
    'id',
    'password',
]) {
}
exports.LoginRequestDto = LoginRequestDto;
//# sourceMappingURL=login.request.dto.js.map