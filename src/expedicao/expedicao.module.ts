import { Module } from '@nestjs/common';
import { ExpedicaoService } from './expedicao.service';
import { ExpedicaoController } from './expedicao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpedicaoEntity } from 'src/entities/expedicao.entity';

@Module({
  controllers: [ExpedicaoController],
  providers: [ExpedicaoService],
  imports: [TypeOrmModule.forFeature([
    ExpedicaoEntity
  ])]
})
export class ExpedicaoModule {}
