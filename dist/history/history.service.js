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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aws_provider_1 = require("../aws/aws.provider");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("../database/entities/history.entity");
const diet_dto_1 = require("./dto/diet.dto");
const trainer_entity_1 = require("../database/entities/trainer.entity");
const workout_dto_1 = require("./dto/workout.dto");
let HistoryService = class HistoryService {
    constructor(historyRepository, trainerRepository, awsProvider) {
        this.historyRepository = historyRepository;
        this.trainerRepository = trainerRepository;
        this.awsProvider = awsProvider;
    }
    async getContents(trainer_id, userId, date, type) {
        const exist = await this.trainerRepository.findOneBy({ trainer_id });
        if (!exist)
            throw new common_1.NotFoundException('존재하지 않는 트레이너입니다.');
        const target = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`;
        const contents = await this.historyRepository
            .createQueryBuilder('history')
            .select([
            'history.history_id',
            'history.perform_time',
            'history.description',
            'media.path',
        ])
            .leftJoin('history.media', 'media')
            .where('Date(history.perform_time) = :target and history.customer_id = :customer_id and history.trainer_id = :trainer_id and history.history_type = :type', {
            type,
            target,
            trainer_id,
            customer_id: userId,
        })
            .getMany();
        if (contents.length < 1)
            throw new common_1.NotFoundException('히스토리가 존재하지 않습니다.');
        const res = [];
        if (type == 'workout') {
            for (const content of contents) {
                const temp = new workout_dto_1.WorkoutDto();
                const [index, sets, reps, degree, parts] = content.description.split('/');
                temp.time = content.perform_time.toLocaleString();
                temp.index = Number(index);
                temp.sets = Number(sets);
                temp.reps = Number(reps);
                temp.degree = degree;
                temp.parts = parts.split(',');
                temp.video = content.media.path;
                res.push(temp);
            }
            return res.sort((a, b) => a.index - b.index);
        }
        for (const content of contents) {
            const temp = new diet_dto_1.DietDto();
            const [title, amount, score] = content.description.split('/');
            temp.time = content.perform_time.toLocaleString();
            temp.title = title;
            temp.amount = amount;
            temp.score = Number(score);
            temp.path = content.media.path;
            res.push(temp);
        }
        return res;
    }
    async createWorkout(trainer_id, userId, file, dto) {
        const s3Obj = await this.awsProvider.upload('workout', file);
        const media = await this.awsProvider.createMedia(s3Obj.key, 'video');
        const history = this.historyRepository.create({
            customer_id: userId,
            description: dto.getDescripion(),
            history_type: 'workout',
            perform_time: new Date(),
            trainer_id,
            media,
        });
        return await this.historyRepository.save(history);
    }
    async createDiet(trainer_id, userId, file, dto) {
        const s3Obj = await this.awsProvider.upload('diet', file);
        const media = await this.awsProvider.createMedia(s3Obj.key, 'image');
        const time = dto.time;
        const history = this.historyRepository.create({
            customer_id: userId,
            description: dto.getDescripion(),
            history_type: 'diet',
            perform_time: this.getDateFromDateSTR(time),
            trainer_id,
            media,
        });
        return await this.historyRepository.save(history);
    }
    getDateFromDateSTR(time) {
        const current = new Date();
        const hour = Number(time.slice(0, 2));
        const min = Number(time.slice(2));
        current.setHours(hour, min, 0, 0);
        return current;
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.HistoryEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(trainer_entity_1.TrainerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        aws_provider_1.AwsProvider])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map