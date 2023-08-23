import { Controller, Get, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api/data')
export class DataController {
    constructor(private readonly dataService: DataService) {}

    @Get()  //handles GET requests
    getData() {
        try {
            const dataset = this.dataService.getDataset();
            if (dataset.length === 0) {
              throw new NotFoundException('No data available.');
            }
            return dataset;
          } catch (error) {
            if (error instanceof NotFoundException) {
              throw new NotFoundException('No data available.');
            } else {
              throw new InternalServerErrorException('Something went wrong.');
            }
        }
    }
}