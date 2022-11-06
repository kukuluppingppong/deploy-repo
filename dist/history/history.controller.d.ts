/// <reference types="multer" />
import { DietDto } from './dto/diet.dto';
import { WorkoutDto } from './dto/workout.dto';
import { HistoryService } from './history.service';
import { CustomerEntity } from '../database/entities/customer.entity';
export declare class HistoryController {
    private historyService;
    constructor(historyService: HistoryService);
    feedback(): Promise<string[]>;
    getDiet(trainer_id: number, date: string, user: CustomerEntity): Promise<import("./dto/Ihistory").IHistory[]>;
    getWorktout(trainer_id: number, date: string, user: CustomerEntity): Promise<import("./dto/Ihistory").IHistory[]>;
    diet(dto: DietDto, trainer_id: number, file: Express.Multer.File, user: CustomerEntity): Promise<import("../database/entities/history.entity").HistoryEntity>;
    workout(dto: WorkoutDto, trainer_id: number, file: Express.Multer.File, user: any): Promise<import("../database/entities/history.entity").HistoryEntity>;
}
