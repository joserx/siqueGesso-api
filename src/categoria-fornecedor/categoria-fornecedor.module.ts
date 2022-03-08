import { Module } from '@nestjs/common';
import { CategoriaFornecedorService } from './categoria-fornecedor.service';
import { CategoriaFornecedorController } from './categoria-fornecedor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import {CategoriaFornecedorEntity} from 'src/entities/categoria-fornecedor.entity'

@Module({
  controllers: [CategoriaFornecedorController],
  providers: [CategoriaFornecedorService],
  imports: [TypeOrmModule.forFeature([CategoriaFornecedorEntity])],
  exports:[CategoriaFornecedorService],

})
export class CategoriaFornecedorModule {}
