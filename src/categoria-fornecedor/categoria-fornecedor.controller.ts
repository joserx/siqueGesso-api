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

import { CategoriaFornecedorService } from './categoria-fornecedor.service';
import { CreateCategoriaFornecedorDto } from './dto/create-categoria-fornecedor.dto';
import { UpdateCategoriaFornecedorDto } from './dto/update-categoria-fornecedor.dto';

@Controller('categoria-fornecedor')
export class CategoriaFornecedorController {
  constructor(
    private readonly categoriaFornecedorService: CategoriaFornecedorService,
  ) {}

  @Post()
  create(@Body() createCategoriaFornecedorDto: CreateCategoriaFornecedorDto) {
    return this.categoriaFornecedorService.create(createCategoriaFornecedorDto);
  }

  @Get()
  find(@Query() params) {
    return this.categoriaFornecedorService.find(params);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.categoriaFornecedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaFornecedorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaFornecedorDto: UpdateCategoriaFornecedorDto,
  ) {
    return this.categoriaFornecedorService.update(
      +id,
      updateCategoriaFornecedorDto,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.categoriaFornecedorService.remove(+id);
  }
}
