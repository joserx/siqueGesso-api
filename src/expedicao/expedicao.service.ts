import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpedicaoEntity } from 'src/entities/expedicao.entity';
import { Repository } from 'typeorm';
import { CreateExpedicaoDto } from './dto/create-expedicao.dto';
import { UpdateExpedicaoDto } from './dto/update-expedicao.dto';

@Injectable()
export class ExpedicaoService {

  constructor(
    @InjectRepository(ExpedicaoEntity)
    private readonly expedicaoRepository: Repository<ExpedicaoEntity>
  ){ }

  async create(data) {
    let expedicao =  await this.expedicaoRepository.create(data);
    return await this.expedicaoRepository.save(expedicao)
  }

  async findAll() {
    return await this.expedicaoRepository.find();
  }

  async findByPage(no : number) {
    return await this.expedicaoRepository.createQueryBuilder()
      .limit(6)
      .offset(6*Number(no))
      .getMany()
  }

  async findOne(id: number) {
    return await this.expedicaoRepository.findOne(id);
  }

  async update(id: number, data: any) {
    return await this.expedicaoRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.expedicaoRepository.delete(id);
  }
}
