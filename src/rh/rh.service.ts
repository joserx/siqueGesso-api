import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { AusenciaService } from 'src/ausencia/ausencia.service';
import { RhEntity } from 'src/entities/rh.entity';
import { ExamesService } from 'src/exames/exames.service';
import { FaltasService } from 'src/faltas/faltas.service';
import { Repository } from 'typeorm';

@Injectable()
export class RhService {
    constructor(
        @InjectRepository(RhEntity)
        private readonly rhRepository: Repository<RhEntity>,
        private readonly faltaService: FaltasService,
        private readonly exameService: ExamesService,
        private readonly ausenciaService: AusenciaService
    ) { }

    async find() {
        return await this.rhRepository.find()
    }

    async findByPage(no){
        return await this.rhRepository.createQueryBuilder('colab')
            .orderBy("colab.name", "ASC")
            .limit(6)
            .offset(6*Number(no))
            .getMany()
    }

    async findOne(id: number) {
        if (id && Number(id)) {
            return await this.rhRepository.findOne(id, { relations: ['createdBy', 'avatar', 'anexes', 'falta', 'exame'] });
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
        console.log(rh)
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
            let req = await this.rhRepository.findOne(id, {relations: ['falta', 'ausencia', 'exame', 'vt']})
            for(let falta of req.falta){
                await this.faltaService.remove(falta.id)
            }
            for(let ausencia of req.ausencia){
                await this.ausenciaService.remove(ausencia.id)
            }
            return await this.rhRepository.delete(id); 
        } else {
            throw new HttpException('No id provided', 500);
        }
    }

}
