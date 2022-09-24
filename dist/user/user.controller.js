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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../auth/auth.service");
const login_request_dto_1 = require("../auth/dto/login.request.dto");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const customer_entity_1 = require("../database/entities/customer.entity");
const createUser_dto_1 = require("./dto/createUser.dto");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async getUser(user) {
        return user;
    }
    async auth_test(user) {
        return `[인가 성공] 사용자: ${user.name}`;
    }
    async getOne(userId) {
        return await this.userService.getOneWithId(userId);
    }
    logIn(dto) {
        return this.authService.jwtLogIn(dto);
    }
    async create(dto) {
        return await this.userService.signUp(dto);
    }
    async update(user, dto) {
        return await this.userService.update(user.customer_id, dto);
    }
    async delete(user) {
        return await this.userService.delete(user.customer_id);
    }
    async setProfileImage(file, user) {
        return await this.userService.setProfileImage(user.customer_id, file);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '로그인 사용자 정보 조회',
        description: '주어진 jwt 토큰을 사용해 현재 로그인 중인 유저의 정보를 얻습니다.',
    }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('auth'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '인가 테스트',
        description: '주어진 jwt 토큰을 이용해서 인가를 테스트 하기 위한 용도입니다.',
    }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "auth_test", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: '회원 조회',
        description: 'userId를 기반으로 유저 한명을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 조회 됐습니다.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '로그인이 성공적으로 수행 됐습니다.',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '로그인',
        description: 'LoginRequestDto를 통해서 로그인을 수행합니다. 로그인 성공시 서버는 jwt 토큰을 전달합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "logIn", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '레코드가 성공적으로 생성 됐습니다.',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '회원가입',
        description: 'CreateUserDto를 통해서 회원가입을 수행합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 업데이트 됐습니다.',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '회원 업데이트',
        description: 'jwt 토큰과 UpdateUserDto를 기반으로 회원을 업데이트합니다.(may not work well)',
    }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity, updateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '레코드가 성공적으로 삭제 됐습니다.',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '회원 삭제',
        description: '주어진 jwt 토큰을 이용해서 회원을 삭제합니다.',
    }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('profileImage'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '레코드가 성공적으로 생성 됐습니다.',
    }),
    (0, swagger_1.ApiOperation)({
        summary: '회원 프로필 이미지 설정',
        description: '주어진 이미지를 통해 사용자의 프로필 이미지를 설정합니다.',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "setProfileImage", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('회원(Customer)'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map