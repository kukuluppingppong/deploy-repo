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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("../database/entities/customer.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const aws_provider_1 = require("../aws/aws.provider");
let UserService = class UserService {
    constructor(customerRepository, awsProvider) {
        this.customerRepository = customerRepository;
        this.awsProvider = awsProvider;
    }
    async getOneWithId(userId) {
        return await this.customerRepository
            .createQueryBuilder('customer')
            .leftJoinAndSelect('customer.profile_image', 'media')
            .where({ customer_id: userId })
            .getOne();
    }
    async getOneWithUserId(id) {
        return await this.customerRepository.findOneBy({ id });
    }
    async signUp(dto) {
        const { id } = dto;
        const exsit = await this.customerRepository.findOneBy({ id });
        if (exsit) {
            throw new common_1.BadRequestException('해당 아이디로 만들어진 아이디가 이미 있습니다.');
        }
        return await this.customerRepository.save(Object.assign(Object.assign({}, dto), { password: await bcrypt.hash(dto.password, 10) }));
    }
    async update(userId, dto) {
        return await this.customerRepository.update(userId, dto);
    }
    async delete(userId) {
        return await this.customerRepository.delete(userId);
    }
    async setProfileImage(userId, file) {
        const s3Obj = await this.awsProvider.upload('user_profile', file);
        const media = await this.awsProvider.createMedia(s3Obj.key, 'image');
        return await this.customerRepository.update(userId, {
            profile_image: media,
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.CustomerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        aws_provider_1.AwsProvider])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map