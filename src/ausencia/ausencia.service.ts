import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AusenciaEntity } from 'src/entities/ausencia.entity';
import { Repository } from 'typeorm';
import { UpdateAusenciaDto } from './dto/update-ausencia.dto';

@Injectable()
export class AusenciaService {

  constructor(
    @InjectRepository(AusenciaEntity)
    private readonly ausenciaRepository: Repository<AusenciaEntity>
  ){}

  async create(data) {
    let ausencia = await this.ausenciaRepository.create(data)
    await this.ausenciaRepository.save(ausencia)
  }

  async findAll() {
    return await this.ausenciaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ausencia`;
  }

  update(id: number, updateAusenciaDto: UpdateAusenciaDto) {
    return `This action updates a #${id} ausencia`;
  }

  async remove(id: number) {
    return await this.ausenciaRepository.delete(id);
  }
}
