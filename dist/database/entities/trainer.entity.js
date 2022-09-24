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
exports.TrainerEntity = void 0;
const typeorm_1 = require("typeorm");
const community_entity_1 = require("./community.entity");
const commonUser_entity_1 = require("./interface/commonUser.entity");
const media_entity_1 = require("./media.entity");
const training_entity_1 = require("./training.entity");
let TrainerEntity = class TrainerEntity extends commonUser_entity_1.CommonUserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TrainerEntity.prototype, "trainer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TrainerEntity.prototype, "career", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TrainerEntity.prototype, "award", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TrainerEntity.prototype, "self_introduction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => training_entity_1.TrainingEntity, (traning) => traning.trainer),
    __metadata("design:type", Array)
], TrainerEntity.prototype, "trainings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => community_entity_1.CommunityEntity, (post) => post.trainer),
    __metadata("design:type", Array)
], TrainerEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => media_entity_1.MediaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'profile_image', referencedColumnName: 'media_id' }),
    __metadata("design:type", media_entity_1.MediaEntity)
], TrainerEntity.prototype, "profile_image", void 0);
TrainerEntity = __decorate([
    (0, typeorm_1.Entity)('trainer')
], TrainerEntity);
exports.TrainerEntity = TrainerEntity;
//# sourceMappingURL=trainer.entity.js.map