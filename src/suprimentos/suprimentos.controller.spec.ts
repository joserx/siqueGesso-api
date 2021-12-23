import { Test, TestingModule } from '@nestjs/testing';
import { SuprimentosController } from './suprimentos.controller';
import { SuprimentosService } from './suprimentos.service';

describe('SuprimentosController', () => {
  let controller: SuprimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuprimentosController],
      providers: [SuprimentosService],
    }).compile();

    controller = module.get<SuprimentosController>(SuprimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
