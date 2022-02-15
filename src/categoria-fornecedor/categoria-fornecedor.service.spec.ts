import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaFornecedorService } from './categoria-fornecedor.service';

describe('CategoriaFornecedorService', () => {
  let service: CategoriaFornecedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaFornecedorService],
    }).compile();

    service = module.get<CategoriaFornecedorService>(CategoriaFornecedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
