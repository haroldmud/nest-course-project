import { Test, TestingModule } from '@nestjs/testing';
import { OverdoseController } from './overdose.controller';

describe('OverdoseController', () => {
  let controller: OverdoseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OverdoseController],
    }).compile();

    controller = module.get<OverdoseController>(OverdoseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
