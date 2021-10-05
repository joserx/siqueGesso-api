import { Injectable } from '@nestjs/common';
import { CreateExpedicaoDto } from './dto/create-expedicao.dto';
import { UpdateExpedicaoDto } from './dto/update-expedicao.dto';

@Injectable()
export class ExpedicaoService {
  create(createExpedicaoDto: CreateExpedicaoDto) {
    return 'This action adds a new expedicao';
  }

  findAll() {
    return `This action returns all expedicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expedicao`;
  }

  update(id: number, updateExpedicaoDto: UpdateExpedicaoDto) {
    return `This action updates a #${id} expedicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} expedicao`;
  }
}
