import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RhEntity } from 'src/entities/rh.entity';
import { FaltasService } from 'src/faltas/faltas.service';
import { Repository } from 'typeorm';

@Injectable()
export class RhService {
    constructor(
        @InjectRepository(RhEntity)
        private readonly rhRepository: Repository<RhEntity>,
        private readonly faltaService: FaltasService
    ) { }

    async find() {
        return await this.rhRepository.find({ select: ['id', 'name', 'surname', 'status','role', 'department', 'admission', 'disabled', 'filial'] });
    }

    async findOne(id: number) {
        if (id && Number(id)) {
            return await this.rhRepository.findOne(id, { relations: ['createdBy', 'avatar', 'anexes', 'falta'] });
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

    async disabledData() {
        let disabled = await this.rhRepository.find({ select: ['status'], where: {status : 0}})
        let enabled = await this.rhRepository.find({ select: ['status'], where: {status : 1}})
        return { disabled: disabled.length, enabled: enabled.length }
    }

    async create(data: any) {
        let rh = await this.rhRepository.create(data);
        return await this.rhRepository.save(rh);
    }

    async update(id: number, data: any) {
        let rh = await this.rhRepository.findOne(id, {relations: ['createdBy', 'avatar', 'anexes']});
        if(rh) {
            if (id && Number(id)) {
                await this.rhRepository.save({id, ...rh, ...data });
                return await this.rhRepository.findOne(id, { relations: ['createdBy', 'avatar', 'anexes'] });
            } else {
                throw new HttpException('No id provided', 500);
            }
        }
    }

    async delete(id: number) {
        if (id && Number(id)) {
            for(let falta of (await this.rhRepository.findOne(id, {relations: ['falta']})).falta){
                await this.faltaService.remove(falta.id)
            }
            return await this.rhRepository.delete(id); 
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

}
