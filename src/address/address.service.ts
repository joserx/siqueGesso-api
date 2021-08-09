import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from 'src/entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository : Repository<AddressEntity>
    ) { }

    async find() {
        return await this.addressRepository.find();
    }

    async findOne(id : number) {
        return await this.addressRepository.findOne(id);
    }

    async create(data : any) {
        let address : any = await this.addressRepository.create(data);
        await this.addressRepository.save(address)
        return await this.addressRepository.findOne(address.id);
    }

    async update(id : number, data : any) {

    }

    async delete(id : number) {
        return await this.addressRepository.delete(id);
    }

}
