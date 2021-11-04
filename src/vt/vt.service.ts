import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VtEntity } from 'src/entities/vt.entity';
import { Repository } from 'typeorm';
import { CreateVtDto } from './dto/create-vt.dto';
import { UpdateVtDto } from './dto/update-vt.dto';

@Injectable()
export class VtService {

  constructor(
    @InjectRepository(VtEntity)
    private readonly vtRepository: Repository<VtEntity>
  ){}

  async create(data) {
    let vt = this.vtRepository.create(data)
    console.log(data)
    return await this.vtRepository.save(vt)
  }

  async findAll() {
    return await this.vtRepository.find()
  }

  async findOne(id: number) {
    if(id && Number(id)){
      return await this.vtRepository.findOne(id);
    }else{
      throw new HttpException('No id provided', 500);
    }
  }

  async update(id: number, data: any) {
    await this.vtRepository.update(id, data)
  }

  async remove(id: number) {
    return await this.vtRepository.delete(id);
  }
}
