import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Suprimento } from 'src/entities/suprimento.entity';
import { Repository } from 'typeorm';
import { ProviderEntity } from 'src/entities/provider.entity';
import { CreateSuprimentoDto } from './dto/create-suprimento.dto';
import { UpdateSuprimentoDto } from './dto/update-suprimento.dto';

@Injectable()
export class SuprimentosService {
  constructor(
    @InjectRepository(Suprimento)
    private suprimentoRepository: Repository<Suprimento>,

    @InjectRepository(ProviderEntity)
    private providerRepository: Repository<ProviderEntity>,
  ) {}
  async create(body: CreateSuprimentoDto) {
    let fornecedores = [];
    for (let fornecedor of body['fornecedores'])
      fornecedores.push(await this.providerRepository.findOne(fornecedor.id));

    body['fornecedores'] = fornecedores;
    return await this.suprimentoRepository.save(body);
  }

  async findAll() {
    return await this.suprimentoRepository.find();
  }

  async findOne(id: number) {
    return await this.suprimentoRepository.findOne(id);
  }

  async update(id: number, data: any) {
    await this.suprimentoRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.suprimentoRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
