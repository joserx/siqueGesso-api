import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpedicaoService } from './expedicao.service';
import { CreateExpedicaoDto } from './dto/create-expedicao.dto';
import { UpdateExpedicaoDto } from './dto/update-expedicao.dto';

@Controller('expedicao')
export class ExpedicaoController {
  constructor(private readonly expedicaoService: ExpedicaoService) {}

  @Post()
  create(@Body() createExpedicaoDto: CreateExpedicaoDto) {
    return this.expedicaoService.create(createExpedicaoDto);
  }

  @Get()
  findAll() {
    return this.expedicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expedicaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpedicaoDto: UpdateExpedicaoDto) {
    return this.expedicaoService.update(+id, updateExpedicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expedicaoService.remove(+id);
  }
}
