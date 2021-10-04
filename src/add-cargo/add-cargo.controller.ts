import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddCargoService } from './add-cargo.service';
import { CreateAddCargoDto } from './dto/create-add-cargo.dto';
import { UpdateAddCargoDto } from './dto/update-add-cargo.dto';

@Controller('cargo')
export class AddCargoController {
  constructor(private readonly addCargoService: AddCargoService) {}

  @Post()
  create(@Body() createAddCargoDto: CreateAddCargoDto) {
    return this.addCargoService.create(createAddCargoDto);
  }

  @Get()
  findAll() {
    return this.addCargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addCargoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddCargoDto: UpdateAddCargoDto) {
    return this.addCargoService.update(+id, updateAddCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addCargoService.remove(+id);
  }
}
