import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateContasPagarDto } from 'src/contas-pagar/dto/update-contas-pagar.dto';
import { ContasPagar } from 'src/entities/contas-pagar.entity';
import { PedidoCompra } from 'src/entities/pedido-compra.entity';
import { Repository } from 'typeorm';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';

@Injectable()
export class PedidoCompraService {
  constructor(
    @InjectRepository(ContasPagar)
    private ContasPagarRepository: Repository<ContasPagar>,
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
    return this.PedidoCompraRepository.findOne(id)
  }

  async update(id: number, data: any) {
    await this.PedidoCompraRepository.update(id, data)
    const pedidoCompra = await this.findOne(id)
    if (pedidoCompra.aceite = true){
      const contaPagar: UpdateContasPagarDto  = {
        descricao: pedidoCompra.obs,
        fornecedor: pedidoCompra.fornecedor,
        pagamento: pedidoCompra.meioPag,
        data: pedidoCompra.data,
        valorTotal: pedidoCompra.valorTotal,
        situacao: pedidoCompra.status,
        pedidoCompra: true

      };
      this.ContasPagarRepository.save(contaPagar)

    }
  }

  async remove(id: number) {
    return await this.PedidoCompraRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
