import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabelaProdutoService } from './tabela-produto.service';
import { CreateTabelaProdutoDto } from './dto/create-tabela-produto.dto';
import { UpdateTabelaProdutoDto } from './dto/update-tabela-produto.dto';

@Controller('tabela-produto')
export class TabelaProdutoController {
  constructor(private readonly tabelaProdutoService: TabelaProdutoService) {}

  @Post()
  create(@Body() createTabelaProdutoDto: CreateTabelaProdutoDto) {
    return this.tabelaProdutoService.create(createTabelaProdutoDto);
  }

  @Get()
  findAll() {
    return this.tabelaProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabelaProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabelaProdutoDto: UpdateTabelaProdutoDto) {
    return this.tabelaProdutoService.update(+id, updateTabelaProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabelaProdutoService.remove(+id);
  }
}
