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
exports.HistoryEntity = exports.HISOTRY_TYPES = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const dateAudit_entity_1 = require("./interface/dateAudit.entity");
const media_entity_1 = require("./media.entity");
const training_entity_1 = require("./training.entity");
exports.HISOTRY_TYPES = ['workout', 'diet'];
let HistoryEntity = class HistoryEntity extends dateAudit_entity_1.DateAuditEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], HistoryEntity.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], HistoryEntity.prototype, "trainer_id", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.HISOTRY_TYPES),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 6, nullable: false }),
    __metadata("design:type", String)
], HistoryEntity.prototype, "history_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], HistoryEntity.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'datetime', nullable: false }),
    __metadata("design:type", String)
], HistoryEntity.prototype, "perform_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => training_entity_1.TrainingEntity),
    (0, typeorm_1.JoinColumn)([
        { name: 'trainer_id', referencedColumnName: 'trainer_id' },
        { name: 'customer_id', referencedColumnName: 'customer_id' },
    ]),
    __metadata("design:type", training_entity_1.TrainingEntity)
], HistoryEntity.prototype, "training", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => media_entity_1.MediaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'media', referencedColumnName: 'media_id' }),
    __metadata("design:type", media_entity_1.MediaEntity)
], HistoryEntity.prototype, "media", void 0);
HistoryEntity = __decorate([
    (0, typeorm_1.Entity)('history')
], HistoryEntity);
exports.HistoryEntity = HistoryEntity;
//# sourceMappingURL=history.entity.js.map