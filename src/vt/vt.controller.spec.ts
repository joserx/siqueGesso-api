import { Test, TestingModule } from '@nestjs/testing';
import { VtController } from './vt.controller';
import { VtService } from './vt.service';

describe('VtController', () => {
  let controller: VtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VtController],
      providers: [VtService],
    }).compile();

    controller = module.get<VtController>(VtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
