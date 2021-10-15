import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from 'src/entities/pedido.entity';
import { ItemPedidosModule } from 'src/item-pedidos/item-pedidos.module';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports: [TypeOrmModule.forFeature([
    PedidoEntity
  ]), ItemPedidosModule]
})
export class PedidosModule {}
