import { Test, TestingModule } from '@nestjs/testing';
import { BaixaController } from './baixa.controller';
import { BaixaService } from './baixa.service';

describe('BaixaController', () => {
  let controller: BaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaixaController],
      providers: [BaixaService],
    }).compile();

    controller = module.get<BaixaController>(BaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
