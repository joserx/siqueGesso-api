import { Test, TestingModule } from '@nestjs/testing';
import { TabelaController } from './tabela.controller';
import { TabelaService } from './tabela.service';

describe('TabelaController', () => {
  let controller: TabelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabelaController],
      providers: [TabelaService],
    }).compile();

    controller = module.get<TabelaController>(TabelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
