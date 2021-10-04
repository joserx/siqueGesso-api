import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCargoEntity } from 'src/entities/add-cargo.entity';
import { Repository } from 'typeorm';
import { CreateAddCargoDto } from './dto/create-add-cargo.dto';
import { UpdateAddCargoDto } from './dto/update-add-cargo.dto';

@Injectable()
export class AddCargoService {
  constructor(
    @InjectRepository(AddCargoEntity)
    private readonly cargoRepository: Repository<AddCargoEntity>
  ){}
  async create(data) {
    let cargo = this.cargoRepository.create(data)
    return await this.cargoRepository.save(cargo)
  }

  async findAll() {
    return this.cargoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} addCargo`;
  }

  update(id: number, updateAddCargoDto: UpdateAddCargoDto) {
    return `This action updates a #${id} addCargo`;
  }

  async remove(id: number) {
    return await this.cargoRepository.delete(id)
  }
}
