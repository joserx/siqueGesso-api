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
import { ContasPagarService } from './contas-pagar.service';
import { CreateContasPagarDto } from './dto/create-contas-pagar.dto';
import { UpdateContasPagarDto } from './dto/update-contas-pagar.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('contas-pagar')
export class ContasPagarController {
  constructor(private readonly contasPagarService: ContasPagarService) {}

  @Post()
  create(@Body() createContasPagarDto: CreateContasPagarDto) {
    return this.contasPagarService.create(createContasPagarDto);
  }

  @Get()
  findAll() {
    return this.contasPagarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasPagarService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id, @Body() updateContasPagarDto: any) {
    return this.contasPagarService.update(id, updateContasPagarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasPagarService.remove(+id);
  }
}
