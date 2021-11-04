import { Test, TestingModule } from '@nestjs/testing';
import { NconfromService } from './nconfrom.service';

describe('NconfromService', () => {
  let service: NconfromService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NconfromService],
    }).compile();

    service = module.get<NconfromService>(NconfromService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
