import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {ContasReceber} from 'src/entities/contas-receber.entity'
import { Repository } from 'typeorm';
import { CreateContasReceberDto } from './dto/create-contas-receber.dto';
import { UpdateContasReceberDto } from './dto/update-contas-receber.dto';

@Injectable()
export class ContasReceberService {
  constructor(
    @InjectRepository(ContasReceber)
    private ContasReceberRepository: Repository<ContasReceber>
  ){}

  async create(body: CreateContasReceberDto) {
    return await this.ContasReceberRepository.save(body);
  }

  async findAll() {
    return await this.ContasReceberRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} contasPagar`;
  }

  async update(id: number, data:any) {
    await this.ContasReceberRepository.update(id, data);
  }

  async remove(id: number) {
    return await this.ContasReceberRepository.softDelete(id).catch((e)=>{
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    })
  }
}
