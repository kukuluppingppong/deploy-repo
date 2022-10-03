import { DateAuditEntity } from './interface/dateAudit.entity';
import { MediaEntity } from './media.entity';
import { TrainingEntity } from './training.entity';
export declare const HISOTRY_TYPES: string[];
export declare class HistoryEntity extends DateAuditEntity {
    history_id: number;
    customer_id: number;
    trainer_id: number;
    history_type: 'diet' | 'workout';
    description?: string;
    perform_time: Date;
    training: TrainingEntity;
    media?: MediaEntity;
}
