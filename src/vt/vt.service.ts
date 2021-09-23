import { Injectable } from '@nestjs/common';
import { CreateVtDto } from './dto/create-vt.dto';
import { UpdateVtDto } from './dto/update-vt.dto';

@Injectable()
export class VtService {
  create(createVtDto: CreateVtDto) {
    return 'This action adds a new vt';
  }

  findAll() {
    return `This action returns all vt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vt`;
  }

  update(id: number, updateVtDto: UpdateVtDto) {
    return `This action updates a #${id} vt`;
  }

  remove(id: number) {
    return `This action removes a #${id} vt`;
  }
}
