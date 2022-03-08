import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {CategoriaFornecedorEntity} from 'src/entities/categoria-fornecedor.entity'
import { Repository } from 'typeorm';

import { CreateCategoriaFornecedorDto } from './dto/create-categoria-fornecedor.dto';
import { UpdateCategoriaFornecedorDto } from './dto/update-categoria-fornecedor.dto';

@Injectable()
export class CategoriaFornecedorService {
  constructor(
    @InjectRepository(CategoriaFornecedorEntity)
    private readonly categoriaFornecedorRepository: Repository<CategoriaFornecedorEntity>,
  ){}

  async create(body: CreateCategoriaFornecedorDto) {
    return await this.categoriaFornecedorRepository.save(body);
  }

  async find(params?) {
    if (params) {
      return await this.categoriaFornecedorRepository.find(params);
    }
    return await this.categoriaFornecedorRepository.find();
  }

  async findAll() {
    return await this.categoriaFornecedorRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaFornecedor`;
  }

  async update(id: number, data: any) {
    await this.categoriaFornecedorRepository.save(data);
  }

  async remove(id: number) {
    return await this.categoriaFornecedorRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
