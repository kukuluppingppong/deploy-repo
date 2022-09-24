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
exports.CommunityEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const customer_entity_1 = require("./customer.entity");
const trainer_entity_1 = require("./trainer.entity");
let CommunityEntity = class CommunityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommunityEntity.prototype, "post_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CommunityEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], CommunityEntity.prototype, "like_count", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommunityEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.post, {
        nullable: true,
    }),
    __metadata("design:type", Array)
], CommunityEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, (customer) => customer.posts, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id', referencedColumnName: 'customer_id' }),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], CommunityEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_entity_1.TrainerEntity, (trainer) => trainer.posts, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'trainer_id', referencedColumnName: 'trainer_id' }),
    __metadata("design:type", trainer_entity_1.TrainerEntity)
], CommunityEntity.prototype, "trainer", void 0);
CommunityEntity = __decorate([
    (0, typeorm_1.Entity)('community')
], CommunityEntity);
exports.CommunityEntity = CommunityEntity;
//# sourceMappingURL=community.entity.js.map