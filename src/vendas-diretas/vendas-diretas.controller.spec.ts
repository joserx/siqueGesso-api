import { Test, TestingModule } from '@nestjs/testing';
import { VendasDiretasController } from './vendas-diretas.controller';
import { VendasDiretasService } from './vendas-diretas.service';

describe('VendasDiretasController', () => {
  let controller: VendasDiretasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendasDiretasController],
      providers: [VendasDiretasService],
    }).compile();

    controller = module.get<VendasDiretasController>(VendasDiretasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
