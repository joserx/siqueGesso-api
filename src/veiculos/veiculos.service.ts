import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VeiculoEntity } from 'src/entities/veiculo.entity';
import { Repository } from 'typeorm';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Injectable()
export class VeiculosService {

  constructor(
    @InjectRepository(VeiculoEntity)
    private readonly veiculoRepository: Repository<VeiculoEntity>
  ){ }

  async create(data: any) {
    let veiculo = this.veiculoRepository.create(data)
    return await this.veiculoRepository.save(veiculo)
  }

  async findAll() {
    return await this.veiculoRepository.find()
  }

  async findOne(id: number) {
    return await this.veiculoRepository.findOne(id)
  }

  async update(id: number, data: any) {
    await this.veiculoRepository.update(id, data)
  }

  remove(id: number) {
    return `This action removes a #${id} veiculo`;
  }
}
