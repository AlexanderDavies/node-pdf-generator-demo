import { Injectable } from '@nestjs/common';

@Injectable()
export class ChartService {
  getViewName(): string {
    return 'report';
  }
}
