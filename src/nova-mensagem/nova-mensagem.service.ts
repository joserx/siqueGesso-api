import { Injectable } from '@nestjs/common';
import { CreateNovaMensagemDto } from './dto/create-nova-mensagem.dto';
import { UpdateNovaMensagemDto } from './dto/update-nova-mensagem.dto';

@Injectable()
export class NovaMensagemService {
  create(createNovaMensagemDto: CreateNovaMensagemDto) {
    return 'This action adds a new novaMensagem';
  }

  findAll() {
    return `This action returns all novaMensagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novaMensagem`;
  }

  update(id: number, updateNovaMensagemDto: UpdateNovaMensagemDto) {
    return `This action updates a #${id} novaMensagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} novaMensagem`;
  }
}
