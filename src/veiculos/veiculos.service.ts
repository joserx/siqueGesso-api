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

  findAll() {
    return `This action returns all veiculos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} veiculo`;
  }

  update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return `This action updates a #${id} veiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} veiculo`;
  }
}
