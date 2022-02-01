import { Test, TestingModule } from '@nestjs/testing';
import { DestinacaoVendasService } from './destinacao-vendas.service';

describe('DestinacaoVendasService', () => {
  let service: DestinacaoVendasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinacaoVendasService],
    }).compile();

    service = module.get<DestinacaoVendasService>(DestinacaoVendasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
