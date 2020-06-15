import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('Health Controller', () => {
  let healthController: HealthController;
  let healthService: HealthService;

  beforeEach(async () => {
    const health: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    healthController = health.get<HealthController>(HealthController);
    healthService = health.get<HealthService>(HealthService);
  });

  describe('when checking health', () => {
      beforeEach(() => {
          jest.spyOn(healthService, 'ping').mockImplementation(() => 'pong');
      })
    it('should return a pong message', () => {
        const res = healthController.ping();
        expect(res).toEqual('pong');
    });
  });
});
