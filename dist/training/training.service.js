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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trainer_entity_1 = require("../database/entities/trainer.entity");
const typeorm_2 = require("typeorm");
const training_entity_1 = require("../database/entities/training.entity");
const trainerInfoResponse_dto_1 = require("./dto/trainerInfoResponse.dto");
let TrainingService = class TrainingService {
    constructor(trainerRepository, trainingRepository) {
        this.trainerRepository = trainerRepository;
        this.trainingRepository = trainingRepository;
    }
    async getAllTrainer() {
        const trainers = await this.trainerRepository
            .createQueryBuilder('trainer')
            .leftJoinAndSelect('trainer.profile_image', 'media')
            .getMany();
        return trainers.map((trainer) => {
            const dto = new trainerInfoResponse_dto_1.TrainerInfoResponseDto();
            dto.trainer_id = trainer.trainer_id;
            dto.name = trainer.name;
            dto.phone_number = trainer.phone_number;
            dto.career = trainer.career;
            dto.award = trainer.award;
            dto.self_introduction = trainer.self_introduction;
            dto.profile_image = trainer.profile_image.path;
            return dto;
        });
    }
    async getMyTraining(customerId) {
        return await this.trainingRepository.findBy({ customer_id: customerId });
    }
    async join(customerId, trainerId) {
        const trainer = await this.trainerRepository.findOneBy({
            trainer_id: trainerId,
        });
        if (trainer == null) {
            throw new common_1.NotFoundException('존재하지 않는 트레이너입니다.');
        }
        const duplication = await this.trainingRepository
            .findBy({
            trainer_id: trainerId,
        })
            .then((entities) => entities.filter((v) => v.customer_id === customerId))
            .then((v) => Boolean(v[0]));
        if (duplication) {
            throw new common_1.BadRequestException('이미 트레이너에게 등록된 회원입니다.');
        }
        const training = this.trainingRepository.create({
            customer_id: customerId,
            trainer_id: trainerId,
            enrollAt: new Date(),
            expirationAt: new Date(),
        });
        return await this.trainingRepository.save(training);
    }
};
TrainingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trainer_entity_1.TrainerEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(training_entity_1.TrainingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TrainingService);
exports.TrainingService = TrainingService;
//# sourceMappingURL=training.service.js.map