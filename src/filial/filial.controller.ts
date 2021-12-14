import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FilialService } from './filial.service';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

@Controller('filial')
export class FilialController {
  constructor(private readonly filialService: FilialService) {}

  @Post()
  create(@Body() createFilialDto) {
    return this.filialService.create(createFilialDto);
  }

  @Get()
  findAll() {
    return this.filialService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filialService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.filialService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filialService.remove(+id);
  }
}
