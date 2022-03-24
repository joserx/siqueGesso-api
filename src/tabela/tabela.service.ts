import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tabela } from 'src/entities/tabela.entity';
import { Repository } from 'typeorm';
import { CreateTabelaDto } from './dto/create-tabela.dto';
import { UpdateTabelaDto } from './dto/update-tabela.dto';

@Injectable()
export class TabelaService {

  constructor(
    @InjectRepository(Tabela)
    private readonly tabelaRepository: Repository<Tabela>
  ) {}

  create(createTabelaDto: CreateTabelaDto) {
    return 'This action adds a new tabela';
  }

  findAll() {
    return this.tabelaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tabela`;
  }

  update(id: number, updateTabelaDto: UpdateTabelaDto) {
    return `This action updates a #${id} tabela`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabela`;
  }
}
