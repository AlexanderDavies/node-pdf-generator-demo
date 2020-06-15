import { TestingModule, Test } from '@nestjs/testing';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  let chartService: ChartService;

  beforeEach(async () => {
    const chart: TestingModule = await Test.createTestingModule({
      providers: [ChartService],
    }).compile();

    chartService = chart.get<ChartService>(ChartService);
  });

  describe('when fetching the view page', () => {
    it('should return report', () => {
      const res = chartService.getViewName();
      expect(res).toEqual('report');
    });
  });
});
