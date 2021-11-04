import { Test, TestingModule } from '@nestjs/testing';
import { AddTurnoService } from './add-turno.service';

describe('AddTurnoService', () => {
  let service: AddTurnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddTurnoService],
    }).compile();

    service = module.get<AddTurnoService>(AddTurnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
