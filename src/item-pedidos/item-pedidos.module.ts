import { Module } from '@nestjs/common';
import { ItemPedidosService } from './item-pedidos.service';
import { ItemPedidosController } from './item-pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedidoEntity } from 'src/entities/item-pedido.entity';

@Module({
  controllers: [ItemPedidosController],
  providers: [ItemPedidosService],
  imports: [TypeOrmModule.forFeature([
    ItemPedidoEntity
  ])],
  exports: [ItemPedidosService]
})
export class ItemPedidosModule {}
