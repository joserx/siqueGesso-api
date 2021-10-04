import { Test, TestingModule } from '@nestjs/testing';
import { AddCargoService } from './add-cargo.service';

describe('AddCargoService', () => {
  let service: AddCargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCargoService],
    }).compile();

    service = module.get<AddCargoService>(AddCargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
