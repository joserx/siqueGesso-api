import { Test, TestingModule } from '@nestjs/testing';
import { EmbarqueService } from './embarque.service';

describe('EmbarqueService', () => {
  let service: EmbarqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbarqueService],
    }).compile();

    service = module.get<EmbarqueService>(EmbarqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
