import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPedidoEntity } from 'src/entities/item-pedido.entity';
import { Repository } from 'typeorm';
import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';

@Injectable()
export class ItemPedidosService {

  constructor(
    @InjectRepository(ItemPedidoEntity)
    private readonly itemPedidosRepository: Repository<ItemPedidoEntity>
  ){ }

  async create(data: any) {
    let item =  this.itemPedidosRepository.create(data);
    return await this.itemPedidosRepository.save(item)
  }

  findAll() {
    return `This action returns all itemPedidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemPedido`;
  }

  async update(id: number, data: any) {
    return await this.itemPedidosRepository.update(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} itemPedido`;
  }
}
