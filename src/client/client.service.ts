import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(ClientEntity)
        private readonly clientRepository : Repository<ClientEntity>
    ) { }

    async find() {
        return await this.clientRepository.find({ relations: ['addresses'] });
    }

    async findOne(id : number) {
        return await this.clientRepository.findOne(id, { relations: ['addresses'] });
    }

    async create(data : any) {
        let client : any = await this.clientRepository.create(data);
        await this.clientRepository.save(client)
        return await this.clientRepository.findOne(client.id, { relations: ['addresses'] });
    }

    async update(id : number, data : any) {

    }

    async delete(id : number) {
        return await this.clientRepository.delete(id);
    }

}
