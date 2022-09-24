"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaEntity = exports.MEDIA_TYPES = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const dateAudit_entity_1 = require("./interface/dateAudit.entity");
exports.MEDIA_TYPES = ['video', 'sound', 'image', 'gif'];
let MediaEntity = class MediaEntity extends dateAudit_entity_1.DateAuditEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MediaEntity.prototype, "media_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], MediaEntity.prototype, "path", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(exports.MEDIA_TYPES),
    (0, typeorm_1.Column)({ type: 'varchar', length: 6, nullable: false }),
    __metadata("design:type", String)
], MediaEntity.prototype, "media_type", void 0);
MediaEntity = __decorate([
    (0, typeorm_1.Entity)('media')
], MediaEntity);
exports.MediaEntity = MediaEntity;
//# sourceMappingURL=media.entity.js.map