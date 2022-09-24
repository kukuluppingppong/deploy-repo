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
exports.AwsProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const AWS = require("aws-sdk");
const path = require("path");
const media_entity_1 = require("../database/entities/media.entity");
const typeorm_2 = require("typeorm");
let AwsProvider = class AwsProvider {
    constructor(mediaRepository, configService) {
        this.mediaRepository = mediaRepository;
        this.configService = configService;
        this.awsS3 = new AWS.S3({
            accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'),
            secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
            region: this.configService.get('AWS_S3_REGION'),
        });
        this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME');
    }
    async upload(category, file) {
        try {
            const key = `${category}/${Date.now()}_${path.basename(file.originalname)}`.replace(/ /g, '');
            const s3Obj = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
                Body: file.buffer,
                ACL: 'public-read',
                ContentType: file.mimetype,
            })
                .promise();
            return { key, s3Obj, contentType: file.mimetype };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new common_1.BadRequestException('파일 업로드를 실패했습니다.');
        }
    }
    async createMedia(key, type) {
        const media = this.mediaRepository.create({
            path: key,
            media_type: type,
        });
        return await this.mediaRepository.save(media);
    }
};
AwsProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(media_entity_1.MediaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], AwsProvider);
exports.AwsProvider = AwsProvider;
//# sourceMappingURL=aws.provider.js.map