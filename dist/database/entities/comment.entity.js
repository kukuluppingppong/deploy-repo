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
var CommentEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const community_entity_1 = require("./community.entity");
const customer_entity_1 = require("./customer.entity");
const trainer_entity_1 = require("./trainer.entity");
let CommentEntity = CommentEntity_1 = class CommentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "comment_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "post_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => community_entity_1.CommunityEntity, (post) => post.comments),
    (0, typeorm_1.JoinColumn)({ name: 'post_id', referencedColumnName: 'post_id' }),
    __metadata("design:type", CommentEntity)
], CommentEntity.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.CustomerEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id', referencedColumnName: 'customer_id' }),
    __metadata("design:type", customer_entity_1.CustomerEntity)
], CommentEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trainer_entity_1.TrainerEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'trainer_id', referencedColumnName: 'trainer_id' }),
    __metadata("design:type", trainer_entity_1.TrainerEntity)
], CommentEntity.prototype, "trainer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CommentEntity_1, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_comment_id', referencedColumnName: 'comment_id' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "parent_comment_id", void 0);
CommentEntity = CommentEntity_1 = __decorate([
    (0, typeorm_1.Entity)('comment')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map