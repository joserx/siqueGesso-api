import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendasDiretasService } from './vendas-diretas.service';
import { CreateVendasDiretaDto } from './dto/create-vendas-direta.dto';
import { UpdateVendasDiretaDto } from './dto/update-vendas-direta.dto';

@Controller('vendas-diretas')
export class VendasDiretasController {
  constructor(private readonly vendasDiretasService: VendasDiretasService) {}

  @Post()
  create(@Body() createVendasDiretaDto: CreateVendasDiretaDto) {
    return this.vendasDiretasService.create(createVendasDiretaDto);
  }

  @Get()
  findAll() {
    return this.vendasDiretasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendasDiretasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendasDiretaDto: UpdateVendasDiretaDto) {
    return this.vendasDiretasService.update(+id, updateVendasDiretaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendasDiretasService.remove(+id);
  }
}
