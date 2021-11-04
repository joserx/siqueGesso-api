import { Test, TestingModule } from '@nestjs/testing';
import { AddTurnoController } from './add-turno.controller';
import { AddTurnoService } from './add-turno.service';

describe('AddTurnoController', () => {
  let controller: AddTurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddTurnoController],
      providers: [AddTurnoService],
    }).compile();

    controller = module.get<AddTurnoController>(AddTurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
