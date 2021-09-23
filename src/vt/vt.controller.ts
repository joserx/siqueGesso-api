import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VtService } from './vt.service';
import { CreateVtDto } from './dto/create-vt.dto';
import { UpdateVtDto } from './dto/update-vt.dto';

@Controller('vt')
export class VtController {
  constructor(private readonly vtService: VtService) {}

  @Post()
  create(@Body() createVtDto: CreateVtDto) {
    return this.vtService.create(createVtDto);
  }

  @Get()
  findAll() {
    return this.vtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVtDto: UpdateVtDto) {
    return this.vtService.update(+id, updateVtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vtService.remove(+id);
  }
}
