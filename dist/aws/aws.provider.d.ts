/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { MediaEntity } from '../database/entities/media.entity';
import { Repository } from 'typeorm';
export declare class AwsProvider {
    private mediaRepository;
    private configService;
    private awsS3;
    private S3_BUCKET_NAME;
    constructor(mediaRepository: Repository<MediaEntity>, configService: ConfigService);
    upload(category: string, file: Express.Multer.File): Promise<{
        key: string;
        s3Obj: PromiseResult<AWS.S3.PutObjectOutput, AWS.AWSError>;
        contentType: string;
    }>;
    createMedia(key: string, type: 'video' | 'sound' | 'image' | 'gif'): Promise<MediaEntity>;
}
