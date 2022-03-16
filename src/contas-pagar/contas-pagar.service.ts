import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContasPagar } from 'src/entities/contas-pagar.entity';
import { PedidoCompra } from 'src/entities/pedido-compra.entity';
import { Repository } from 'typeorm';
import { CreateContasPagarDto } from './dto/create-contas-pagar.dto';
import { UpdateContasPagarDto } from './dto/update-contas-pagar.dto';

@Injectable()
export class ContasPagarService {
  constructor(
    @InjectRepository(ContasPagar)
    private ContasPagarRepository: Repository<ContasPagar>,
  ) {}

  async create(body: CreateContasPagarDto) {
    return await this.ContasPagarRepository.save(body);
  }

  async findAll() {
    return await this.ContasPagarRepository.find();
  }

  async findOne(id: number) {
    return this.ContasPagarRepository.findOne(id);
  }

  async update(id: number, data: any) {
    await this.ContasPagarRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.ContasPagarRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
