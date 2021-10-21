import { Test, TestingModule } from '@nestjs/testing';
import { EmbarqueController } from './embarque.controller';
import { EmbarqueService } from './embarque.service';

describe('EmbarqueController', () => {
  let controller: EmbarqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbarqueController],
      providers: [EmbarqueService],
    }).compile();

    controller = module.get<EmbarqueController>(EmbarqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
