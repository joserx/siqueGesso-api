import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { SuprimentosService } from './suprimentos.service';
import { CreateSuprimentoDto } from './dto/create-suprimento.dto';
import { UpdateSuprimentoDto } from './dto/update-suprimento.dto';

@Controller('suprimentos')
export class SuprimentosController {
  constructor(private readonly suprimentosService: SuprimentosService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSuprimentoDto: CreateSuprimentoDto) {
    return this.suprimentosService.create(createSuprimentoDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.suprimentosService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.suprimentosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateSuprimentoDto: UpdateSuprimentoDto,
  ) {
    return this.suprimentosService.update(+id, updateSuprimentoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.suprimentosService.remove(+id);
  }
}
