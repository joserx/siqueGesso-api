import { Module } from '@nestjs/common';
import { TabelaService } from './tabela.service';
import { TabelaController } from './tabela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tabela } from 'src/entities/tabela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tabela])],
  controllers: [TabelaController],
  providers: [TabelaService]
})
export class TabelaModule {}
