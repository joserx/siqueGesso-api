import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AusenciaEntity } from 'src/entities/ausencia.entity';
import { AusenciaController } from './ausencia.controller';
import { AusenciaService } from './ausencia.service';

describe('AusenciaController', () => {
  let controller: AusenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AusenciaController],
      providers: [AusenciaService],
    }).compile();

    controller = module.get<AusenciaController>(AusenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
