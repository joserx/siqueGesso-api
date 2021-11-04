import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTurnoEntity } from 'src/entities/add-turno.entity';
import { Repository } from 'typeorm';
import { UpdateAddTurnoDto } from './dto/update-add-turno.dto';

@Injectable()
export class AddTurnoService {

  constructor(
    @InjectRepository(AddTurnoEntity)
    private readonly turnoRepository: Repository<AddTurnoEntity>
  ){ }

  async create(data: any) {
    let turno = await this.turnoRepository.create(data)
    return await this.turnoRepository.save(turno)
  }

  async findAll() {
    return await this.turnoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} addTurno`;
  }

  update(id: number, updateAddTurnoDto: UpdateAddTurnoDto) {
    return `This action updates a #${id} addTurno`;
  }

  async remove(id: number) {
    return await this.turnoRepository.delete(id)
  }
}
