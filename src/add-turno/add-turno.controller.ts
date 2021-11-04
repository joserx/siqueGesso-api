import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddTurnoService } from './add-turno.service';
import { CreateAddTurnoDto } from './dto/create-add-turno.dto';
import { UpdateAddTurnoDto } from './dto/update-add-turno.dto';

@Controller('add-turno')
export class AddTurnoController {
  constructor(private readonly addTurnoService: AddTurnoService) {}

  @Post()
  create(@Body() createAddTurnoDto: CreateAddTurnoDto) {
    return this.addTurnoService.create(createAddTurnoDto);
  }

  @Get()
  findAll() {
    return this.addTurnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addTurnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddTurnoDto: UpdateAddTurnoDto) {
    return this.addTurnoService.update(+id, updateAddTurnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addTurnoService.remove(+id);
  }
}
