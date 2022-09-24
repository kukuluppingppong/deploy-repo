import { BaseEntity } from 'typeorm';
export declare abstract class DateAuditEntity extends BaseEntity {
    createdAt: string;
    modifiedAt: string;
    deletedAt: string;
}
