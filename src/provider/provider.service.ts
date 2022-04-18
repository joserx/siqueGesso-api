import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PaymentCondition } from './entities/payment_condition.entity';
import { ProviderEntity } from '../entities/provider.entity';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(ProviderEntity)
    private readonly providerRepository: Repository<ProviderEntity>,

    @InjectRepository(PaymentCondition)
    private readonly paymentCondicionRepository: Repository<PaymentCondition>,
  ) {}

  async create(createProviderDto: CreateProviderDto) {
    let providerObj = await this.providerRepository.create(createProviderDto);

    return await this.providerRepository.save(providerObj);
  }

  async findAll(): Promise<ProviderEntity[] | undefined> {
    return this.providerRepository
      .find({ relations: ['contacts', 'address', 'payment_condition',] })
      .catch((e) => {
        throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  async findOne(id: number): Promise<ProviderEntity | undefined> {
    return this.providerRepository.findOne(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async update(id: number, updateProviderDto: any) {
    // warning update wait for full implementation (many to many relation)

    return this.providerRepository.update(id, updateProviderDto).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async remove(id: number) {
    return await this.providerRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  async MatchPayment(payment: Array<number>) {
    const conditions: PaymentCondition[] = [];

    return new Promise(async (resolve, rejects) => {
      for (let id of payment) {
        let found = await this.paymentCondicionRepository.findOne(id);
        if (found) conditions.push(found);
      }

      resolve(conditions);
    });
  }
}
