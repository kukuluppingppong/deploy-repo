import { CommunityEntity } from './community.entity';
import { CommonUserEntity } from './interface/commonUser.entity';
import { MediaEntity } from './media.entity';
import { TrainingEntity } from './training.entity';
export declare class TrainerEntity extends CommonUserEntity {
    trainer_id: number;
    career?: string;
    award?: string;
    self_introduction?: string;
    trainings?: TrainingEntity[];
    posts?: CommunityEntity[];
    profile_image?: MediaEntity;
}
