import { Test, TestingModule } from '@nestjs/testing';

import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';

describe('ChartController', () => {
  let chartController: ChartController;
  let chartService: ChartService;

  beforeEach(async () => {
    const chart: TestingModule = await Test.createTestingModule({
      controllers: [ChartController],
      providers: [ChartService],
    }).compile();

    chartService = chart.get<ChartService>(ChartService);
    chartController = chart.get<ChartController>(ChartController);
  });

  describe('when calling chart controller', () => {
    const res: any = {
      render: jest.fn(),
    };

    beforeEach(() => {
      jest
        .spyOn(chartService, 'getViewName')
        .mockImplementation(() => 'report');
    });

    it('should return the rendered page', () => {
      chartController.renderChart(res);
      expect(res.render).toHaveBeenCalledWith('report', {
        fullName: 'Alexander Davies',
      });
    });
  });
});
