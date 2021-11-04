import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NconfromService } from './nconfrom.service';
import { CreateNconfromDto } from './dto/create-nconfrom.dto';
import { UpdateNconfromDto } from './dto/update-nconfrom.dto';

@Controller('nconfrom')
export class NconfromController {
  constructor(private readonly nconfromService: NconfromService) {}

  @Post()
  create(@Body() createNconfromDto: CreateNconfromDto) {
    return this.nconfromService.create(createNconfromDto);
  }

  @Get()
  findAll() {
    return this.nconfromService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nconfromService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNconfromDto: UpdateNconfromDto) {
    return this.nconfromService.update(+id, updateNconfromDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nconfromService.remove(+id);
  }
}
