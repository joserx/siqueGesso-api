import { Test, TestingModule } from '@nestjs/testing';
import { ExpedicaoController } from './expedicao.controller';
import { ExpedicaoService } from './expedicao.service';

describe('ExpedicaoController', () => {
  let controller: ExpedicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpedicaoController],
      providers: [ExpedicaoService],
    }).compile();

    controller = module.get<ExpedicaoController>(ExpedicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
