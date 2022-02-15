import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  update(@Param('id') id: string, @Body() updateContasReceberDto: UpdateContasReceberDto) {
    return this.contasReceberService.update(+id, updateContasReceberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasReceberService.remove(+id);
  }
}
