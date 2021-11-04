import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NconfromEntity } from 'src/entities/nconfrom.entity';
import { Repository } from 'typeorm';
import { CreateNconfromDto } from './dto/create-nconfrom.dto';
import { UpdateNconfromDto } from './dto/update-nconfrom.dto';

@Injectable()
export class NconfromService {

  constructor(
    @InjectRepository(NconfromEntity)
    private readonly nConfromService: Repository<NconfromEntity>
  ){ }

  async create(data: any) {
    let conformidades = await this.nConfromService.create(data)
    return await this.nConfromService.save(conformidades)
  }

  async findAll() {
    return await this.nConfromService.find()
  }

 async findOne(id: number) {
    return await this.nConfromService.findOne(id)
  }

  async update(id: number, data: any) {
    return await this.nConfromService.update(id, data)
  }

  async remove(id: number) {
    return await this.nConfromService.delete(id)
  }
}
