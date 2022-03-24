import { Injectable } from '@nestjs/common';
import { CreateTabelaProdutoDto } from './dto/create-tabela-produto.dto';
import { UpdateTabelaProdutoDto } from './dto/update-tabela-produto.dto';

@Injectable()

export class TabelaProdutoService {
  create(createTabelaProdutoDto: CreateTabelaProdutoDto) {
    return 'This action adds a new tabelaProduto';
  }

  findAll() {
    return `This action returns all tabelaProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabelaProduto`;
  }

  update(id: number, updateTabelaProdutoDto: UpdateTabelaProdutoDto) {
    return `This action updates a #${id} tabelaProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabelaProduto`;
  }
}
