import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaltasService } from './faltas.service';
import { CreateFaltaDto } from './dto/create-falta.dto';
import { UpdateFaltaDto } from './dto/update-falta.dto';

@Controller('faltas')
export class FaltasController {
  constructor(private readonly faltasService: FaltasService) {}

  @Post()
  create(@Body() createFaltaDto: CreateFaltaDto) {
    return this.faltasService.create(createFaltaDto);
  }

  @Get()
  findAll() {
    return this.faltasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faltasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaltaDto: UpdateFaltaDto) {
    return this.faltasService.update(+id, updateFaltaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faltasService.remove(+id);
  }
}
