import { Test, TestingModule } from '@nestjs/testing';
import { OverdoseService } from './overdose.service';

describe('OverdoseService', () => {
  let service: OverdoseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OverdoseService],
    }).compile();

    service = module.get<OverdoseService>(OverdoseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
