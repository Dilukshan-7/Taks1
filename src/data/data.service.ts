import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    private readonly dataset = [
        { id: 1, name: 'name 1' },
        { id: 2, name: 'name 2' },
        // ... other items
      ];
    
      getDataset() {
        return this.dataset;
      }
}
