import { Module } from '@nestjs/common';
import { PedidoCompraService } from './pedido-compra.service';
import { PedidoCompraController } from './pedido-compra.controller';

@Module({
  controllers: [PedidoCompraController],
  providers: [PedidoCompraService]
})
export class PedidoCompraModule {}
