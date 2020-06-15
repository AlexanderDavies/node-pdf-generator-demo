import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ChartService } from './chart.service';

@Controller('chart')

export class ChartController {
  constructor(private chartService: ChartService) {}

  @Get()
  renderChart(@Res() res: Response): any {
    return res.render(this.chartService.getViewName(), {
      fullName: 'Alexander Davies',
    }); 
  }
}
