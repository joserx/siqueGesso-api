import { Test, TestingModule } from '@nestjs/testing';
import { CondicoesPagamentoService } from './condicoes-pagamento.service';

describe('CondicoesPagamentoService', () => {
  let service: CondicoesPagamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CondicoesPagamentoService],
    }).compile();

    service = module.get<CondicoesPagamentoService>(CondicoesPagamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
