import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateFaltaDto } from './dto/update-falta.dto';
import { Repository } from 'typeorm';
import { FaltaEntity } from 'src/entities/falta.entity';

@Injectable()
export class FaltasService {
  
  constructor(
    @InjectRepository(FaltaEntity)
    private readonly faltasRepository: Repository<FaltaEntity>
  ){}

  async create(data) {
    let falta = await this.faltasRepository.create(data);
    await this.faltasRepository.save(falta)
  }

  async findAll() {
    return await this.faltasRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} falta`;
  }

  update(id: number, updateFaltaDto: UpdateFaltaDto) {
    return `This action updates a #${id} falta`;
  }

  async remove(id: number) {
    return await this.faltasRepository.delete(id)
  }
}
