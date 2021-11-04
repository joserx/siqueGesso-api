import { Module } from '@nestjs/common';
import { BaixaService } from './baixa.service';
import { BaixaController } from './baixa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaixaEntity } from 'src/entities/baixa.entity';

@Module({
  controllers: [BaixaController],
  providers: [BaixaService],
  imports: [TypeOrmModule.forFeature([
    BaixaEntity
  ])]
})
export class BaixaModule {}
