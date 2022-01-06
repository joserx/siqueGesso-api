import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoCompra } from 'src/entities/pedido-compra.entity';
import { Repository } from 'typeorm';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';

@Injectable()
export class PedidoCompraService {
  constructor(
    @InjectRepository(PedidoCompra)
    private PedidoCompraRepository: Repository<PedidoCompra>,
  ) {}
  async create(body: CreatePedidoCompraDto) {
    return await this.PedidoCompraRepository.save(body);
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
