import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/entities/produto.entity';
import { ProviderEntity } from 'src/entities/provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, ProviderEntity])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
  exports: [ProdutosService],
})
export class ProdutosModule {}
