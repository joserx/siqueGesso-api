import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFaltaDto } from './dto/create-falta.dto';
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
    console.log(data)
    await this.faltasRepository.save(falta);
    console.log(falta)
  }

  findAll() {
    return `This action returns all faltas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} falta`;
  }

  update(id: number, updateFaltaDto: UpdateFaltaDto) {
    return `This action updates a #${id} falta`;
  }

  remove(id: number) {
    return `This action removes a #${id} falta`;
  }
}
