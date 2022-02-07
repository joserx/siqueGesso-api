import { Test, TestingModule } from '@nestjs/testing';
import { DestinacaoVendasController } from './destinacao-vendas.controller';
import { DestinacaoVendasService } from './destinacao-vendas.service';

describe('DestinacaoVendasController', () => {
  let controller: DestinacaoVendasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinacaoVendasController],
      providers: [DestinacaoVendasService],
    }).compile();

    controller = module.get<DestinacaoVendasController>(DestinacaoVendasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
