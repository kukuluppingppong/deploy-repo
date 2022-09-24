import { CustomerEntity } from '../database/entities/customer.entity';
import { TrainingService } from './training.service';
export declare class TrainingController {
    private trainingService;
    constructor(trainingService: TrainingService);
    myTraining(user: CustomerEntity): Promise<import("../database/entities/training.entity").TrainingEntity[]>;
    allTrainer(): Promise<import("./dto/trainerInfoResponse.dto").TrainerInfoResponseDto[]>;
    joinTrainer(trainerId: number, user: CustomerEntity): Promise<import("../database/entities/training.entity").TrainingEntity>;
}
