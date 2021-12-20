import { Module } from '@nestjs/common';
import { TabelaService } from './tabela.service';
import { TabelaController } from './tabela.controller';

@Module({
  controllers: [TabelaController],
  providers: [TabelaService]
})
export class TabelaModule {}
