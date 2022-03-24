import { Module } from '@nestjs/common';
import { TabelaProdutoService } from './tabela-produto.service';
import { TabelaProdutoController } from './tabela-produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabelaProduto } from 'src/entities/tabela-produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabelaProduto])],
  controllers: [TabelaProdutoController],
  providers: [TabelaProdutoService]
})
export class TabelaProdutoModule {}
