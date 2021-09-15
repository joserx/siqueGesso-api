import { Module } from '@nestjs/common';
import { FaltasService } from './faltas.service';
import { FaltasController } from './faltas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaltaEntity } from 'src/entities/falta.entity';
import { RhEntity } from 'src/entities/rh.entity';

@Module({
  controllers: [FaltasController],
  providers: [FaltasService],
  imports: [TypeOrmModule.forFeature([
    FaltaEntity
  ])],
  exports: [ FaltasService ]
})
export class FaltasModule {}
