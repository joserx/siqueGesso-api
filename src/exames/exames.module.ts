import { Module } from '@nestjs/common';
import { ExamesService } from './exames.service';
import { ExamesController } from './exames.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExameEntity } from 'src/entities/exame.entity';

@Module({
  controllers: [ExamesController],
  providers: [ExamesService],
  imports: [TypeOrmModule.forFeature([
    ExameEntity
  ])],
  exports: [ExamesService]
})
export class ExamesModule {}
