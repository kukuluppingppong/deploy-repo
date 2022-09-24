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
let HistoryService = class HistoryService {
    constructor(historyRepository, awsProvider) {
        this.historyRepository = historyRepository;
        this.awsProvider = awsProvider;
    }
    async createDiet(training_id, userId, file) {
        const s3Obj = await this.awsProvider.upload('diet', file);
        const media = await this.awsProvider.createMedia(s3Obj.key, 'image');
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.HistoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        aws_provider_1.AwsProvider])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map