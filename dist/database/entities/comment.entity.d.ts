import { CustomerEntity } from './customer.entity';
import { TrainerEntity } from './trainer.entity';
export declare class CommentEntity {
    comment_id: number;
    post_id: number;
    content?: string;
    createdAt: Date;
    post: CommentEntity;
    customer?: CustomerEntity;
    trainer?: TrainerEntity;
    parent_comment_id?: number;
}
