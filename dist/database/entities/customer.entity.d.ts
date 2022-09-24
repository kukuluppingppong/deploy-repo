import { CommunityEntity } from './community.entity';
import { CommonUserEntity } from './interface/commonUser.entity';
import { MediaEntity } from './media.entity';
import { TrainingEntity } from './training.entity';
export declare class CustomerEntity extends CommonUserEntity {
    customer_id: number;
    height?: number;
    weight?: number;
    trainings?: TrainingEntity[];
    posts?: CommunityEntity[];
    profile_image?: MediaEntity;
}
