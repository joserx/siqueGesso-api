import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CondicoesPagamentoService } from './condicoes-pagamento.service';
import { CreateCondicoesPagamentoDto } from './dto/create-condicoes-pagamento.dto';
import { UpdateCondicoesPagamentoDto } from './dto/update-condicoes-pagamento.dto';

@Controller('condicoes-pagamento')
export class CondicoesPagamentoController {
  constructor(
    private readonly condicoesPagamentoService: CondicoesPagamentoService,
  ) {}

  @Post()
  create(@Body() createCondicoesPagamentoDto: CreateCondicoesPagamentoDto) {
    return this.condicoesPagamentoService.create(createCondicoesPagamentoDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.condicoesPagamentoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.condicoesPagamentoService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateCondicoesPagamentoDto: UpdateCondicoesPagamentoDto) {
    return this.condicoesPagamentoService.update(+id, updateCondicoesPagamentoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.condicoesPagamentoService.remove(+id);
  }
}
