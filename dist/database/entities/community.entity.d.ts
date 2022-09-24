import { CommentEntity } from './comment.entity';
import { CustomerEntity } from './customer.entity';
import { TrainerEntity } from './trainer.entity';
export declare class CommunityEntity {
    post_id: number;
    content?: string;
    like_count?: number;
    createdAt: Date;
    comments?: CommentEntity[];
    customer?: CustomerEntity;
    trainer?: TrainerEntity;
}
