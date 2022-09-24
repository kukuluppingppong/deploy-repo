import { DateAuditEntity } from './interface/dateAudit.entity';
export declare const MEDIA_TYPES: string[];
export declare class MediaEntity extends DateAuditEntity {
    media_id: number;
    path: string;
    media_type: 'video' | 'sound' | 'image' | 'gif';
}
