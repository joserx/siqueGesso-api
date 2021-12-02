import { Test, TestingModule } from '@nestjs/testing';
import { VendasDiretasService } from './vendas-diretas.service';

describe('VendasDiretasService', () => {
  let service: VendasDiretasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendasDiretasService],
    }).compile();

    service = module.get<VendasDiretasService>(VendasDiretasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
