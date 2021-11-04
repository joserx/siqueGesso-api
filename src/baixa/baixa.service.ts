import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaixaEntity } from 'src/entities/baixa.entity';
import { Repository } from 'typeorm';
import { CreateBaixaDto } from './dto/create-baixa.dto';
import { UpdateBaixaDto } from './dto/update-baixa.dto';

@Injectable()
export class BaixaService {

  constructor(
    @InjectRepository(BaixaEntity)
    private readonly baixaRepository: Repository<BaixaEntity>
  ) { }

  async create(data: any) {
    let baixa = await this.baixaRepository.create(data)
    return await this.baixaRepository.save(baixa)
  }

  async findAll() {
    return await this.baixaRepository.find()
  }

  async findOne(id: number) {
    return await this.baixaRepository.findOne(id)
  }

  async update(id: number, data: any) {
    return await this.baixaRepository.update(id, data)
  }

  async remove(id: number) {
    return this.baixaRepository.delete(id)
  }
}
