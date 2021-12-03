import { Module } from '@nestjs/common';
import { VendasDiretasService } from './vendas-diretas.service';
import { VendasDiretasController } from './vendas-diretas.controller';

@Module({
  controllers: [VendasDiretasController],
  providers: [VendasDiretasService]
})
export class VendasDiretasModule {}
