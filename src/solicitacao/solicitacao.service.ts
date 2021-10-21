import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitacaoEntity } from 'src/entities/solicitacao.entity';
import { Repository } from 'typeorm';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';

@Injectable()
export class SolicitacaoService {

  constructor(
    @InjectRepository(SolicitacaoEntity)
    private readonly solicitacaoRepository: Repository<SolicitacaoEntity>
  ){ }

  async create(data: any) {
    let solicitacao = await this.solicitacaoRepository.create(data)
    return await this.solicitacaoRepository.save(solicitacao)
  }

  async find() {
    return await this.solicitacaoRepository.find();
  }

  async findOne(id: number) {
    return await this.solicitacaoRepository.findOne(id);
  }

  update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return `This action updates a #${id} solicitacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacao`;
  }
}
