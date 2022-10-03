/// <reference types="multer" />
import { AwsProvider } from '../aws/aws.provider';
import { Repository } from 'typeorm';
import { HistoryEntity } from '../database/entities/history.entity';
import { DietDto } from './dto/diet.dto';
import { TrainerEntity } from '../database/entities/trainer.entity';
import { WorkoutDto } from './dto/workout.dto';
import { IHistory } from './dto/Ihistory';
export declare class HistoryService {
    private historyRepository;
    private trainerRepository;
    private awsProvider;
    constructor(historyRepository: Repository<HistoryEntity>, trainerRepository: Repository<TrainerEntity>, awsProvider: AwsProvider);
    getContents(trainer_id: number, userId: number, date: string, type: string): Promise<IHistory[]>;
    createWorkout(trainer_id: number, userId: number, file: Express.Multer.File, dto: WorkoutDto): Promise<HistoryEntity>;
    createDiet(trainer_id: number, userId: number, file: Express.Multer.File, dto: DietDto): Promise<HistoryEntity>;
    private getDateFromDateSTR;
}
