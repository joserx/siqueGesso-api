import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Controller('solicitacao')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post()
  create(@Body() createSolicitacaoDto: CreateSolicitacaoDto) {
    return this.solicitacaoService.create(createSolicitacaoDto);
  }

  @Get()
  find() {
    return this.solicitacaoService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaoService.findOne(+id);
  }

  @Get('page/:number')
  findByPage(@Param('number') no : number) {
    return this.solicitacaoService.findByPage(no);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.solicitacaoService.update(+id, updateSolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaoService.remove(+id);
  }
}
