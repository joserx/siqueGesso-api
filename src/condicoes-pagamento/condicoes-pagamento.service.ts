import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CondicoesPagamentoEntity } from 'src/entities/condicoes-pagamento.entity';
import { Repository } from 'typeorm';
import { CreateCondicoesPagamentoDto } from './dto/create-condicoes-pagamento.dto';
import { UpdateCondicoesPagamentoDto } from './dto/update-condicoes-pagamento.dto';

@Injectable()
export class CondicoesPagamentoService {
  constructor(
    @InjectRepository(CondicoesPagamentoEntity)
    private readonly condicoesPagamentoRepository: Repository<CondicoesPagamentoEntity>,
  ) {}

  async create(body: CreateCondicoesPagamentoDto) {
    return await this.condicoesPagamentoRepository.save(body);
  }

  async findAll() {
    return await this.condicoesPagamentoRepository.find();
  }

  findOne(id: any) {
    return this.condicoesPagamentoRepository.findOne(id)
  }

  async update(id: number, data: any) {
    await this.condicoesPagamentoRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.condicoesPagamentoRepository.delete({id})
  }
}
