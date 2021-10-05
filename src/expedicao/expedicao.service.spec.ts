import { Test, TestingModule } from '@nestjs/testing';
import { ExpedicaoService } from './expedicao.service';

describe('ExpedicaoService', () => {
  let service: ExpedicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpedicaoService],
    }).compile();

    service = module.get<ExpedicaoService>(ExpedicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
