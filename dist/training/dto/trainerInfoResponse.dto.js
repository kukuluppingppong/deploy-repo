"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainerInfoResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const trainer_entity_1 = require("../../database/entities/trainer.entity");
class TrainerInfoResponseDto extends (0, swagger_1.PickType)(trainer_entity_1.TrainerEntity, [
    `trainer_id`,
    `name`,
    `phone_number`,
    `career`,
    `award`,
    `self_introduction`,
]) {
}
exports.TrainerInfoResponseDto = TrainerInfoResponseDto;
//# sourceMappingURL=trainerInfoResponse.dto.js.map