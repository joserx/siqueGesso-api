import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusEntity } from 'src/entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {

  constructor(
    @InjectRepository(StatusEntity)
    private readonly statusServices: Repository<StatusEntity>
  ) { }
  
  async create(data: any) {
    let status = await this.statusServices.create(data)
    return await this.statusServices.save(status)
  }

  async findAll() {
    return await this.statusServices.find()
  }

  async findOne(id: number) {
    return await this.statusServices.findOne(id);
  }

  async update(id: number, data: any) {
    return await this.statusServices.update(id, data)
  }

  async remove(id: number) {
    return await this.statusServices.delete(id)
  }
}
