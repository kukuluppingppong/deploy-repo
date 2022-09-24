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
exports.WorkoutEntity = void 0;
const typeorm_1 = require("typeorm");
const media_entity_1 = require("./media.entity");
let WorkoutEntity = class WorkoutEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkoutEntity.prototype, "workout_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], WorkoutEntity.prototype, "workout_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], WorkoutEntity.prototype, "parent_categories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], WorkoutEntity.prototype, "sub_categories", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => media_entity_1.MediaEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'guide_video', referencedColumnName: 'media_id' }),
    __metadata("design:type", media_entity_1.MediaEntity)
], WorkoutEntity.prototype, "guide_video", void 0);
WorkoutEntity = __decorate([
    (0, typeorm_1.Entity)('workout')
], WorkoutEntity);
exports.WorkoutEntity = WorkoutEntity;
//# sourceMappingURL=workout.entity.js.map