import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinacaoVendaEntity } from 'src/entities/destinacao-venda.entity';
import { Repository } from 'typeorm';
import { CreateDestinacaoVendaDto } from './dto/create-destinacao-venda.dto';
import { UpdateDestinacaoVendaDto } from './dto/update-destinacao-venda.dto';

@Injectable()
export class DestinacaoVendasService {
  constructor(
    @InjectRepository(DestinacaoVendaEntity)
    private readonly destinacaoVendaRepository: Repository<DestinacaoVendaEntity>,
  ) {}

  async create(body: CreateDestinacaoVendaDto) {
    return await this.destinacaoVendaRepository.save(body);
  }

  async find(params?) {
    if (params) {
      return await this.destinacaoVendaRepository.find(params);
    }
    return await this.destinacaoVendaRepository.find();
  }

  findOne(id: number) {}

  async update(id: number, data: any) {
    await this.destinacaoVendaRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.destinacaoVendaRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
