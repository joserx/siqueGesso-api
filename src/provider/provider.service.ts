import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderEntity } from './entities/provider.entity';

@Injectable()
export class ProviderService {

  constructor(
    @InjectRepository(ProviderEntity)
    private readonly providerRepository : Repository<ProviderEntity>
  ) { }

  async create(createProviderDto: CreateProviderDto) {
    let provider = await this.providerRepository.create(createProviderDto);
    await this.providerRepository.save(provider);
    return await this.providerRepository.findOne(provider.id);
  }

  async findAll() {
    return await this.providerRepository.find();
  }

  async findOne(id: number) {
    return await this.providerRepository.findOne(id);
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  async remove(id: number) {
    return await this.providerRepository.softDelete(id);
  }
}
