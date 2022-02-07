import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CategoriaProdutoService } from './categoria-produto.service';
import { CreateCategoriaProdutoDto } from './dto/create-categoria-produto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';

@Controller('categoria-produto')
export class CategoriaProdutoController {
  constructor(
    private readonly categoriaProdutoService: CategoriaProdutoService,
  ) {}

  @Post()
  create(@Body() createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
    return this.categoriaProdutoService.create(createCategoriaProdutoDto);
  }

  @Get()
  find(@Query() params) {
    return this.categoriaProdutoService.find(params);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.categoriaProdutoService.find();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.categoriaProdutoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id,
    @Body() updateCategoriaProdutoDto: UpdateCategoriaProdutoDto,
  ) {
    return this.categoriaProdutoService.update(+id, updateCategoriaProdutoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.categoriaProdutoService.remove(+id);
  }
}
