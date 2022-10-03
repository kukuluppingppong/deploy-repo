/// <reference types="multer" />
import { IHistory } from './Ihistory';
export declare class DietDto implements IHistory {
    title: string;
    time: string;
    amount: string;
    score: number;
    file?: Express.Multer.File;
    path?: string;
    getDescripion(): string;
}
