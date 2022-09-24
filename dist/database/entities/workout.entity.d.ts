import { MediaEntity } from './media.entity';
export declare class WorkoutEntity {
    workout_id: number;
    workout_name: string;
    parent_categories: string;
    sub_categories: string;
    guide_video?: MediaEntity;
}
