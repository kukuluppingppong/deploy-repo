/// <reference types="multer" />
import { IHistory } from './Ihistory';
export declare class WorkoutDto implements IHistory {
    index: number;
    parts: string[];
    sets: number;
    reps: number;
    degree: string;
    file?: Express.Multer.File;
    time?: string;
    video?: string;
    getDescripion(): string;
}
