import { TrainerEntity } from '../database/entities/trainer.entity';
import { Repository } from 'typeorm';
import { TrainingEntity } from '../database/entities/training.entity';
import { TrainerInfoResponseDto } from './dto/trainerInfoResponse.dto';
export declare class TrainingService {
    private trainerRepository;
    private trainingRepository;
    constructor(trainerRepository: Repository<TrainerEntity>, trainingRepository: Repository<TrainingEntity>);
    getAllTrainer(): Promise<TrainerInfoResponseDto[]>;
    getMyTraining(customerId: number): Promise<TrainingEntity[]>;
    join(customerId: number, trainerId: number): Promise<TrainingEntity>;
}
