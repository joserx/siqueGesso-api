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
import { ContasReceberService } from './contas-receber.service';
import { CreateContasReceberDto } from './dto/create-contas-receber.dto';
import { UpdateContasReceberDto } from './dto/update-contas-receber.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('contas-receber')
export class ContasReceberController {
  constructor(private readonly contasReceberService: ContasReceberService) {}

  @Post()
  create(@Body() createContasReceberDto: CreateContasReceberDto) {
    return this.contasReceberService.create(createContasReceberDto);
  }

  @Get()
  findAll() {
    return this.contasReceberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasReceberService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id, @Body() updateContasPagarDto: any) {
    return this.contasReceberService.update(id, updateContasPagarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasReceberService.remove(+id);
  }
}
