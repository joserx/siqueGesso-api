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

  findOne(id: number) {
    return `This action returns a #${id} filial`;
  }

  update(id: number, updateFilialDto: UpdateFilialDto) {
    return `This action updates a #${id} filial`;
  }

  remove(id: number) {
    return `This action removes a #${id} filial`;
  }
}
