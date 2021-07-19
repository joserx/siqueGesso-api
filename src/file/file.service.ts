import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from 'src/entities/file.entity';
import { Repository } from 'typeorm';
import { FileDto } from './file.dto';

@Injectable()
export class FileService {

    constructor(
        @InjectRepository(FileEntity)
        private readonly fileRepository : Repository<FileEntity>
    ) {}

    async find() {
        return await this.fileRepository.find();
    }

    async findOne(id : number) {
        return await this.fileRepository.findOne(id);
    }

    async delete(id : number) {
        return await this.fileRepository.delete(id);
    }

    async update(id : number, data : Partial<FileDto>) {
        await this.fileRepository.update(id, data);
        return this.fileRepository.findOne(id);
    }

    async create(data : Partial<FileDto>) {
        let file = await this.fileRepository.create(data);
        await this.fileRepository.save(file);
        return this.fileRepository.findOne(file.id);
    }

}
