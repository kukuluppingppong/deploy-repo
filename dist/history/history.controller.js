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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../common/decorators/user.decorator");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const diet_dto_1 = require("./dto/diet.dto");
const workout_dto_1 = require("./dto/workout.dto");
const history_service_1 = require("./history.service");
const customer_entity_1 = require("../database/entities/customer.entity");
let HistoryController = class HistoryController {
    constructor(historyService) {
        this.historyService = historyService;
    }
    async getDiet(trainer_id, date, user) {
        return await this.historyService.getContents(trainer_id, user.customer_id, date, 'diet');
    }
    async getWorktout(trainer_id, date, user) {
        return await this.historyService.getContents(trainer_id, user.customer_id, date, 'workout');
    }
    async diet(dto, trainer_id, file, user) {
        return await this.historyService.createDiet(trainer_id, user.customer_id, file, dto);
    }
    async workout(dto, trainer_id, file, user) {
        return await this.historyService.createWorkout(trainer_id, user.customer_id, file, dto);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '식단 및 피드백 조회',
        description: '',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 조회 됐습니다.',
    }),
    (0, common_1.Get)('/diet/:trainer_id/:YYYYMMDD'),
    __param(0, (0, common_1.Param)('trainer_id')),
    __param(1, (0, common_1.Param)('YYYYMMDD')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getDiet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '운동영상 및 피드백 조회',
        description: '',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 조회 됐습니다.',
    }),
    (0, common_1.Get)('/workout/:trainer_id/:YYYYMMDD'),
    __param(0, (0, common_1.Param)('trainer_id')),
    __param(1, (0, common_1.Param)('YYYYMMDD')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getWorktout", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '식단 사진 업로드',
        description: '',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '레코드가 성공적으로 생성 됐습니다.',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/diet/:trainer_id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('trainer_id')),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [diet_dto_1.DietDto, Number, Object, customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "diet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '영상 업로드',
        description: '',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '레코드가 성공적으로 생성 됐습니다.',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.Post)('/workout/:trainer_id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('trainer_id')),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workout_dto_1.WorkoutDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "workout", null);
HistoryController = __decorate([
    (0, swagger_1.ApiTags)('기록(History)'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    (0, common_1.Controller)('history'),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryController);
exports.HistoryController = HistoryController;
//# sourceMappingURL=history.controller.js.map