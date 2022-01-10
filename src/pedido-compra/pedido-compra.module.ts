import { Module } from '@nestjs/common';
import { PedidoCompraService } from './pedido-compra.service';
import { PedidoCompraController } from './pedido-compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoCompra } from '../entities/pedido-compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoCompra])],
  controllers: [PedidoCompraController],
  providers: [PedidoCompraService],
})
export class PedidoCompraModule {}
