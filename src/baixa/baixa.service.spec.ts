import { Test, TestingModule } from '@nestjs/testing';
import { BaixaService } from './baixa.service';

describe('BaixaService', () => {
  let service: BaixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaixaService],
    }).compile();

    service = module.get<BaixaService>(BaixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
