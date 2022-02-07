import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NovaMensagemService } from './nova-mensagem.service';
import { CreateNovaMensagemDto } from './dto/create-nova-mensagem.dto';
import { UpdateNovaMensagemDto } from './dto/update-nova-mensagem.dto';

@Controller('mensagens')
export class NovaMensagemController {
  constructor(private readonly novaMensagemService: NovaMensagemService) {}

  @Post()
  create(@Body() createNovaMensagemDto: CreateNovaMensagemDto) {
    return this.novaMensagemService.create(createNovaMensagemDto);
  }

  @Get()
  findAll() {
    return this.novaMensagemService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novaMensagemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNovaMensagemDto: UpdateNovaMensagemDto,
  ) {
    return this.novaMensagemService.update(+id, updateNovaMensagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novaMensagemService.remove(+id);
  }
}
