import { CustomerEntity } from './customer.entity';
import { TrainerEntity } from './trainer.entity';
export declare class TrainingEntity {
    customer_id: number;
    trainer_id: number;
    enrollAt: Date;
    expirationAt: Date;
    customer: CustomerEntity;
    trainer: TrainerEntity;
}
