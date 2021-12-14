import { HttpException, Injectable } from '@nestjs/common';
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
        return await this.clientRepository.find({ select: ['id', 'name', 'surname', 'email', 'companyEmail', 'companyTelephone', 'telephone', 'fantasyName'], relations: ['addresses'] });
    }

    async findOne(id : number) {
        return await this.clientRepository.findOne(id, { relations: ['addresses', 'tabela'] });
    }

    async create(data : any) {
        let client : any = await this.clientRepository.create(data);
        await this.clientRepository.save(client)
        return await this.clientRepository.findOne(client.id, { relations: ['addresses'] });
    }

    async update(id : number, data : any) {
        let client = await this.clientRepository.findOne(id, {relations: ['addresses']});
        if(client) {
            if (id && Number(id)) {
                await this.clientRepository.save({id, ...client, ...data });
                return await this.clientRepository.findOne(id, { relations: ['addresses'] });
            } else {
                throw new HttpException('No id provided', 500);
            }
        }
    }

    async delete(id : number) {
        return await this.clientRepository.delete(id);
    }

    async findByPage(no : number) {
        return await this.clientRepository.createQueryBuilder("cliente")
          .orderBy("cliente.created_at", "DESC")
          .orderBy("cliente.updated_at", "DESC")
          .limit(6)
          .offset(6*Number(no))
          .getMany()
      }

}
