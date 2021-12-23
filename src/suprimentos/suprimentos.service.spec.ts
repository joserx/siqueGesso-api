import { Test, TestingModule } from '@nestjs/testing';
import { SuprimentosService } from './suprimentos.service';

describe('SuprimentosService', () => {
  let service: SuprimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuprimentosService],
    }).compile();

    service = module.get<SuprimentosService>(SuprimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
