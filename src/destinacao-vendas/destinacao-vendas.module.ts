import { Module } from '@nestjs/common';
import { DestinacaoVendasService } from './destinacao-vendas.service';
import { DestinacaoVendasController } from './destinacao-vendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinacaoVendaEntity } from 'src/entities/destinacao-venda.entity';

@Module({
  controllers: [DestinacaoVendasController],
  providers: [DestinacaoVendasService],
  imports: [TypeOrmModule.forFeature([DestinacaoVendaEntity])],
  exports: [DestinacaoVendasService],
})
export class DestinacaoVendasModule {}
