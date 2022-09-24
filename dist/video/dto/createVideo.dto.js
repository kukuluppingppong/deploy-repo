"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVideoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const media_entity_1 = require("../../database/entities/media.entity");
class CreateVideoDto extends (0, swagger_1.PickType)(media_entity_1.MediaEntity, ['path']) {
}
exports.CreateVideoDto = CreateVideoDto;
//# sourceMappingURL=createVideo.dto.js.map