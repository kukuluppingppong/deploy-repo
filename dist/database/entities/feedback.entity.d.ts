import { HistoryEntity } from './history.entity';
import { DateAuditEntity } from './interface/dateAudit.entity';
export declare class FeedBackEntity extends DateAuditEntity {
    history_id: number;
    history: HistoryEntity;
    contents?: string;
}
