import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll() {
    return await this.PedidoCompraRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoCompra`;
  }

  update(id: number, updatePedidoCompraDto: UpdatePedidoCompraDto) {
    return `This action updates a #${id} pedidoCompra`;
  }

  async remove(id: number) {
    return await this.PedidoCompraRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
