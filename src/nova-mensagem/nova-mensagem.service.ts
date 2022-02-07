import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NovaMensagem } from 'src/entities/nova-mensagem.entity';
import { Repository } from 'typeorm';
import { CreateNovaMensagemDto } from './dto/create-nova-mensagem.dto';
import { UpdateNovaMensagemDto } from './dto/update-nova-mensagem.dto';

@Injectable()
export class NovaMensagemService {
  constructor(
    @InjectRepository(NovaMensagem)
    private readonly novaMensagemRepository: Repository<NovaMensagem>,
  ) {}

  async create(body: CreateNovaMensagemDto) {
    return await this.novaMensagemRepository.save(body);
  }

  async find() {
    return await this.novaMensagemRepository.find();
  }

  findOne(id: number) {}

  async update(id: number, data: any) {
    await this.novaMensagemRepository.save(data);
  }

  async remove(id: number) {
    return await this.novaMensagemRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
