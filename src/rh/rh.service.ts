import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RhEntity } from 'src/entities/rh.entity';
import { Repository } from 'typeorm';
import { RhDto } from './rh.dto';

@Injectable()
export class RhService {

    constructor(
        @InjectRepository(RhEntity)
        private readonly rhRepository: Repository<RhEntity>
    ) { }

    async find() {
        return await this.rhRepository.find({ select: ['id', 'name', 'surname', 'role', 'department', 'admission', 'disabled'] });
    }

    async findOne(id: number) {
        if (id && Number(id)) {
            return await this.rhRepository.findOne(id, { relations: ['createdBy', 'avatar'] });
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    async create(data: Partial<RhDto>) {
        let rh = await this.rhRepository.create(data);
        await this.rhRepository.save(rh);
        return await this.rhRepository.findOne(rh.id, { relations: ['createdBy', 'avatar'] });
    }

    async update(id: number, data: Partial<RhDto>) {
        if (id && Number(id)) {
            await this.rhRepository.update(id, data);
            return await this.rhRepository.findOne(id, { relations: ['createdBy', 'avatar'] });
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    async delete(id: number) {
        if (id && Number(id)) {
            return await this.rhRepository.delete(id);
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

}
