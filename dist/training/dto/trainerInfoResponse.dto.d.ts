import { TrainerEntity } from '../../database/entities/trainer.entity';
declare const TrainerInfoResponseDto_base: import("@nestjs/common").Type<Pick<TrainerEntity, "name" | "phone_number" | "trainer_id" | "career" | "award" | "self_introduction">>;
export declare class TrainerInfoResponseDto extends TrainerInfoResponseDto_base {
    profile_image: string;
}
export {};
