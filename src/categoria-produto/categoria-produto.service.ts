import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaProdutoEntity } from 'src/entities/categoria-produto.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaProdutoDto } from './dto/create-categoria-produto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';

@Injectable()
export class CategoriaProdutoService {
  constructor(
    @InjectRepository(CategoriaProdutoEntity)
    private readonly categoriaProdutoRepository: Repository<CategoriaProdutoEntity>,
  ) {}

  async create(body: CreateCategoriaProdutoDto) {
    return await this.categoriaProdutoRepository.save(body);
  }

  async find(params?) {
    if (params) {
      return await this.categoriaProdutoRepository.find(params);
    }
    return await this.categoriaProdutoRepository.find();
  }

  findOne(id: number) {}

  async update(id: number, data: any) {
    await this.categoriaProdutoRepository.save(data);
  }

  async remove(id: number) {
    return await this.categoriaProdutoRepository.softDelete(id).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
