import { Test, TestingModule } from '@nestjs/testing';
import { NconfromController } from './nconfrom.controller';
import { NconfromService } from './nconfrom.service';

describe('NconfromController', () => {
  let controller: NconfromController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NconfromController],
      providers: [NconfromService],
    }).compile();

    controller = module.get<NconfromController>(NconfromController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
