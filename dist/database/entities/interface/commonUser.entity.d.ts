import { DateAuditEntity } from './dateAudit.entity';
export declare abstract class CommonUserEntity extends DateAuditEntity {
    id: string;
    name: string;
    phone_number: string;
    password: string;
    agree_info?: boolean;
    gender?: 'm' | 'f';
}
