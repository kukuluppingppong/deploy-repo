/// <reference types="multer" />
import { AwsProvider } from 'src/aws/aws.provider';
import { Repository } from 'typeorm';
import { HistoryEntity } from '../database/entities/history.entity';
export declare class HistoryService {
    private historyRepository;
    private awsProvider;
    constructor(historyRepository: Repository<HistoryEntity>, awsProvider: AwsProvider);
    createDiet(training_id: number, userId: number, file: Express.Multer.File): Promise<void>;
}
