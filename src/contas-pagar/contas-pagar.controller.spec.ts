import { Test, TestingModule } from '@nestjs/testing';
import { ContasPagarController } from './contas-pagar.controller';
import { ContasPagarService } from './contas-pagar.service';

describe('ContasPagarController', () => {
  let controller: ContasPagarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContasPagarController],
      providers: [ContasPagarService],
    }).compile();

    controller = module.get<ContasPagarController>(ContasPagarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
