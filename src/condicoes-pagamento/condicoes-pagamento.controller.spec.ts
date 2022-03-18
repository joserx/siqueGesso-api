import { Test, TestingModule } from '@nestjs/testing';
import { CondicoesPagamentoController } from './condicoes-pagamento.controller';
import { CondicoesPagamentoService } from './condicoes-pagamento.service';

describe('CondicoesPagamentoController', () => {
  let controller: CondicoesPagamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CondicoesPagamentoController],
      providers: [CondicoesPagamentoService],
    }).compile();

    controller = module.get<CondicoesPagamentoController>(CondicoesPagamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
