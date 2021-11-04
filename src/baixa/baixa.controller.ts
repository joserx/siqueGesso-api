import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaixaService } from './baixa.service';
import { CreateBaixaDto } from './dto/create-baixa.dto';
import { UpdateBaixaDto } from './dto/update-baixa.dto';

@Controller('baixa')
export class BaixaController {
  constructor(private readonly baixaService: BaixaService) {}

  @Post()
  create(@Body() createBaixaDto: CreateBaixaDto) {
    return this.baixaService.create(createBaixaDto);
  }

  @Get()
  findAll() {
    return this.baixaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baixaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaixaDto: UpdateBaixaDto) {
    return this.baixaService.update(+id, updateBaixaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baixaService.remove(+id);
  }
}
