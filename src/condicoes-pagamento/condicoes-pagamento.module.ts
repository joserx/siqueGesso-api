import { Module } from '@nestjs/common';
import { CondicoesPagamentoService } from './condicoes-pagamento.service';
import { CondicoesPagamentoController } from './condicoes-pagamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CondicoesPagamentoEntity} from 'src/entities/condicoes-pagamento.entity'


@Module({
  controllers: [CondicoesPagamentoController],
  providers: [CondicoesPagamentoService],
  imports: [TypeOrmModule.forFeature([CondicoesPagamentoEntity])],
  exports: [CondicoesPagamentoService],


})
export class CondicoesPagamentoModule {}
