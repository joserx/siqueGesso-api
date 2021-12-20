import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilialEntity } from 'src/entities/filial.entity';
import { Repository } from 'typeorm';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';

@Injectable()
export class FilialService {
  // ver qual o problema que está acontecento aqui nesse negócio 
  
  constructor(
    @InjectRepository(FilialEntity)
    private readonly filialRepository: Repository<FilialEntity>
  ){}

  async create(data) {
    let filial = await this.filialRepository.create(data);
    console.log(data)
    await this.filialRepository.save(filial);
    console.log(filial)
  }

  async find() {
    return await this.filialRepository.find();
  }

  async findOne(id: number) {
    return await this.filialRepository.findOne(id, {relations: ['banner']});
  }

  async update(id: number, data: any) {
    let filial = await this.filialRepository.findOne(id, {relations: ['banner']})
    if(filial){
      await this.filialRepository.save({id, ...filial, ...data})
      return await this.filialRepository.findOne(id, {relations: ['banner']})
    }
  }

  async remove(id: number) {
    return await this.filialRepository.delete(id);
  }
}
