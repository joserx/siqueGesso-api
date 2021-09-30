import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExameEntity } from 'src/entities/exame.entity';
import { Repository } from 'typeorm';
import { CreateExameDto } from './dto/create-exame.dto';
import { UpdateExameDto } from './dto/update-exame.dto';

@Injectable()
export class ExamesService {

  constructor(
    @InjectRepository(ExameEntity)
    private readonly exameRepository: Repository<ExameEntity>
  ){}

  async create(data) {
    let creating = await this.exameRepository.create(data)
    this.exameRepository.save(creating)
  }

  findAll() {
    return `This action returns all exames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exame`;
  }

  update(id) {
    return `This action returns a #${id} exame`;
  }

  async remove(id) {
    return await this.exameRepository.delete(id)
  }
}
