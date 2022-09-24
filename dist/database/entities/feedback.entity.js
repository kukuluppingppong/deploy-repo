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
exports.FeedBackEntity = void 0;
const typeorm_1 = require("typeorm");
const history_entity_1 = require("./history.entity");
const dateAudit_entity_1 = require("./interface/dateAudit.entity");
let FeedBackEntity = class FeedBackEntity extends dateAudit_entity_1.DateAuditEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FeedBackEntity.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FeedBackEntity.prototype, "trainer_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => history_entity_1.HistoryEntity),
    (0, typeorm_1.JoinColumn)([
        { name: 'trainer_id', referencedColumnName: 'trainer_id' },
        { name: 'customer_id', referencedColumnName: 'customer_id' },
    ]),
    __metadata("design:type", history_entity_1.HistoryEntity)
], FeedBackEntity.prototype, "history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], FeedBackEntity.prototype, "contents", void 0);
FeedBackEntity = __decorate([
    (0, typeorm_1.Entity)('feedback')
], FeedBackEntity);
exports.FeedBackEntity = FeedBackEntity;
//# sourceMappingURL=feedback.entity.js.map