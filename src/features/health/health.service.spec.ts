import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let healthService: HealthService;

  beforeEach(async () => {
    const health: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    healthService = health.get<HealthService>(HealthService);
  });

  describe('when calling the health service', () => {
    it('should return pong', () => {
      const res = healthService.ping();
      expect(res).toEqual('pong');
    });
  });
});
