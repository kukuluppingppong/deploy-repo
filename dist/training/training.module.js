"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const training_entity_1 = require("../database/entities/training.entity");
const trainer_entity_1 = require("../database/entities/trainer.entity");
const training_controller_1 = require("./training.controller");
const training_service_1 = require("./training.service");
let TrainingModule = class TrainingModule {
};
TrainingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([trainer_entity_1.TrainerEntity, training_entity_1.TrainingEntity])],
        controllers: [training_controller_1.TrainingController],
        providers: [training_service_1.TrainingService],
    })
], TrainingModule);
exports.TrainingModule = TrainingModule;
//# sourceMappingURL=training.module.js.map