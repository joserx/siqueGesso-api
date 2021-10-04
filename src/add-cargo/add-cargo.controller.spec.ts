import { Test, TestingModule } from '@nestjs/testing';
import { AddCargoController } from './add-cargo.controller';
import { AddCargoService } from './add-cargo.service';

describe('AddCargoController', () => {
  let controller: AddCargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddCargoController],
      providers: [AddCargoService],
    }).compile();

    controller = module.get<AddCargoController>(AddCargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
