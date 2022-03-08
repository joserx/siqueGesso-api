import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaFornecedorController } from './categoria-fornecedor.controller';
import { CategoriaFornecedorService } from './categoria-fornecedor.service';

describe('CategoriaFornecedorController', () => {
  let controller: CategoriaFornecedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaFornecedorController],
      providers: [CategoriaFornecedorService],
    }).compile();

    controller = module.get<CategoriaFornecedorController>(CategoriaFornecedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
