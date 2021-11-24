import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from 'src/entities/pedido.entity';
import { Produto } from 'src/entities/produto.entity';
import { Repository } from 'typeorm';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {

  constructor(
    @InjectRepository(PedidoEntity)
    private readonly pedidoRepository: Repository<PedidoEntity>,

    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>
  ){}

  async create(data) {
    let produtos: any[] = []
    for(let produto of data['produto']){
      produtos.push(await this.produtoRepository.findOne(Number(produto.id)))
    }
    data['produto'] = produtos
    // console.log(data)
    return await this.pedidoRepository.save(data)
  }

  async findAll() {
    return await this.pedidoRepository.find({relations: ['produto']});
  }

  async findOne(id: number) {
    return await this.pedidoRepository.findOne(id, {relations: ['produto', 'item']});
  }

  async update(id: number, data: any) {
    let array = await this.pedidoRepository.findOne(id, {relations: ['item', 'produto']})
    return await this.pedidoRepository.save({id, ...array, ...data})
  }

  async remove(id: number) {
    return await this.pedidoRepository.delete(id);
  }

  async findByPage(no : number) {
    return await this.pedidoRepository.createQueryBuilder()
      .limit(6)
      .offset(6*Number(no))
      .getMany()
  }
}
