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
exports.TrainingController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const customer_entity_1 = require("../database/entities/customer.entity");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const training_service_1 = require("./training.service");
const swagger_1 = require("@nestjs/swagger");
let TrainingController = class TrainingController {
    constructor(trainingService) {
        this.trainingService = trainingService;
    }
    async myTraining(user) {
        return await this.trainingService.getMyTraining(user.customer_id);
    }
    async allTrainer() {
        return await this.trainingService.getAllTrainer();
    }
    async joinTrainer(trainerId, user) {
        return await this.trainingService.join(user.customer_id, trainerId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '나의 트레이닝 조회',
        description: '주어진 jwt 토큰을 이용해, 내가 소속된 트레이닝의 정보를 리턴합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 조회 됐습니다.',
    }),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "myTraining", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 트레이너 조회',
        description: '트레이너와 매칭하기 위해서 모든 트레이너의 목록을 리턴합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 조회 됐습니다.',
    }),
    (0, common_1.Get)('/trainers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "allTrainer", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '트레이너와 매칭합니다.',
        description: 'URI 파라미터로 전달된 트레이너 ID와 jwt 토큰을 기반으로 트레이닝을 생성합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '레코드가 성공적으로 생성 됐습니다.',
    }),
    (0, common_1.Post)(':trainerId/join'),
    __param(0, (0, common_1.Param)('trainerId')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], TrainingController.prototype, "joinTrainer", null);
TrainingController = __decorate([
    (0, swagger_1.ApiTags)('트레이닝(Macthing)'),
    (0, common_1.Controller)('training'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [training_service_1.TrainingService])
], TrainingController);
exports.TrainingController = TrainingController;
//# sourceMappingURL=training.controller.js.map