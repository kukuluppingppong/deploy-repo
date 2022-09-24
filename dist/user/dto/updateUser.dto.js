"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const customer_entity_1 = require("../../database/entities/customer.entity");
class UpdateUserDto extends (0, swagger_1.PartialType)(customer_entity_1.CustomerEntity) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=updateUser.dto.js.map