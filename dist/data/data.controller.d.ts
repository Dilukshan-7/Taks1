import { DataService } from './data.service';
export declare class DataController {
    private readonly dataService;
    constructor(dataService: DataService);
    getData(): {
        id: number;
        name: string;
    }[];
}
