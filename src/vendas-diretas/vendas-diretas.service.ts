import { Injectable } from '@nestjs/common';
import { CreateVendasDiretaDto } from './dto/create-vendas-direta.dto';
import { UpdateVendasDiretaDto } from './dto/update-vendas-direta.dto';

@Injectable()
export class VendasDiretasService {
  create(createVendasDiretaDto: CreateVendasDiretaDto) {
    return 'This action adds a new vendasDireta';
  }

  findAll() {
    return `This action returns all vendasDiretas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendasDireta`;
  }

  update(id: number, updateVendasDiretaDto: UpdateVendasDiretaDto) {
    return `This action updates a #${id} vendasDireta`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendasDireta`;
  }
}
