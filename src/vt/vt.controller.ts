import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  @Get('ativo')
  findAtivos() {
    return this.vtService.findAtivo();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vtService.findOne(+id);
  }

  @Patch()
  update(@Body() data: any) {
    return this.vtService.update(data.id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vtService.remove(+id);
  }
}
