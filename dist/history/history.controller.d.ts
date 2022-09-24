/// <reference types="multer" />
import { HistoryService } from './history.service';
export declare class HistoryController {
    private historyService;
    constructor(historyService: HistoryService);
    diet(training_id: number, file: Express.Multer.File, user: any): Promise<void>;
    workout(training_id: number, file: Express.Multer.File, user: any): Promise<void>;
}
