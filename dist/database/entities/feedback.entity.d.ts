import { HistoryEntity } from './history.entity';
import { DateAuditEntity } from './interface/dateAudit.entity';
export declare class FeedBackEntity extends DateAuditEntity {
    customer_id: number;
    trainer_id: number;
    history: HistoryEntity;
    contents?: string;
}
