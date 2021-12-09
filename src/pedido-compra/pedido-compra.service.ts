import { Injectable } from '@nestjs/common';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';

@Injectable()
export class PedidoCompraService {
  create(createPedidoCompraDto: CreatePedidoCompraDto) {
    return 'This action adds a new pedidoCompra';
  }

  findAll() {
    return `This action returns all pedidoCompra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoCompra`;
  }

  update(id: number, updatePedidoCompraDto: UpdatePedidoCompraDto) {
    return `This action updates a #${id} pedidoCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoCompra`;
  }
}
