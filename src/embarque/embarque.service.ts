import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmbarqueEntity } from 'src/entities/embarque.entity';
import { Repository } from 'typeorm';
import { CreateEmbarqueDto } from './dto/create-embarque.dto';
import { UpdateEmbarqueDto } from './dto/update-embarque.dto';

@Injectable()
export class EmbarqueService {

  constructor(
    @InjectRepository(EmbarqueEntity)
    private readonly embarqueRepository: Repository<EmbarqueEntity>
  ){ }

  async create(data: any) {
    let embarque = await this.embarqueRepository.create(data)
    return await this.embarqueRepository.save(embarque)
  }

  async findAll() {
    return await this.embarqueRepository.find();
  }

  async findOne(id: number) {
    return await this.embarqueRepository.findOne(id, {relations: ['solicitacao']});
  }

  update(id: number, updateEmbarqueDto: UpdateEmbarqueDto) {
    return `This action updates a #${id} embarque`;
  }

  async remove(id: number) {
    return await this.embarqueRepository.delete(id);
  }
}
