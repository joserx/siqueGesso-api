import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: number) {
    return this.produtosService.findOne(id);
  }

  @Patch('/delete')
  @UseGuards(AuthGuard('jwt'))
  remove(@Body() produto: any) {
    return this.produtosService.remove(produto);
  }

  @Put('/estoque')
  @UseGuards(AuthGuard('jwt'))
  addEstoque(@Body() produtos: any) {
    return this.produtosService.addEstoque(produtos);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id, @Body() updateProdutoDto: any) {
    console.log(updateProdutoDto);

    return this.produtosService.update(id, updateProdutoDto);
  }
}
