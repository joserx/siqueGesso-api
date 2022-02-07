import { Module } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CategoriaProdutoController } from './categoria-produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProdutoEntity } from 'src/entities/categoria-produto.entity';

@Module({
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoService],
  imports: [TypeOrmModule.forFeature([CategoriaProdutoEntity])],
  exports: [CategoriaProdutoService],
})
export class CategoriaProdutoModule {}
