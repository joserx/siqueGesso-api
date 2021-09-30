import { Module } from '@nestjs/common';
import { AusenciaService } from './ausencia.service';
import { AusenciaController } from './ausencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AusenciaEntity } from 'src/entities/ausencia.entity';

@Module({
  controllers: [AusenciaController],
  providers: [AusenciaService],
  imports: [TypeOrmModule.forFeature([
    AusenciaEntity
  ])],
  exports: [AusenciaService]
})
export class AusenciaModule {}
