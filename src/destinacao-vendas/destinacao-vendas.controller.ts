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

import { DestinacaoVendasService } from './destinacao-vendas.service';
import { CreateDestinacaoVendaDto } from './dto/create-destinacao-venda.dto';
import { UpdateDestinacaoVendaDto } from './dto/update-destinacao-venda.dto';

@Controller('destinacao-vendas')
export class DestinacaoVendasController {
  constructor(
    private readonly destinacaoVendasService: DestinacaoVendasService,
  ) {}

  @Post()
  create(@Body() createDestinacaoVendaDto: CreateDestinacaoVendaDto) {
    return this.destinacaoVendasService.create(createDestinacaoVendaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.destinacaoVendasService.findAll();
  }

  @Get()
  find(@Query() params) {
    return this.destinacaoVendasService.find(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinacaoVendasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDestinacaoVendaDto: UpdateDestinacaoVendaDto,
  ) {
    return this.destinacaoVendasService.update(+id, updateDestinacaoVendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinacaoVendasService.remove(+id);
  }
}
