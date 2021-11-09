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
    console.log(data)
    // return await this.pedidoRepository.save(data)
  }

  async findAll() {
    return await this.pedidoRepository.find({relations: ['produto']});
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
