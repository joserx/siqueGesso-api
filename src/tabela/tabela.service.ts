import { Injectable } from '@nestjs/common';
import { CreateTabelaDto } from './dto/create-tabela.dto';
import { UpdateTabelaDto } from './dto/update-tabela.dto';

@Injectable()
export class TabelaService {
  create(createTabelaDto: CreateTabelaDto) {
    return 'This action adds a new tabela';
  }

  findAll() {
    return `This action returns all tabela`;
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
