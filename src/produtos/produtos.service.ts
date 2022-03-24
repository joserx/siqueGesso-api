import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/entities/produto.entity';
import { ProviderEntity } from 'src/entities/provider.entity';
import { TabelaProduto } from 'src/entities/tabela-produto.entity';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(ProviderEntity)
    private providerRepository: Repository<ProviderEntity>,
  
    @InjectRepository(TabelaProduto)
    private tabelaProdutoRepository: Repository<TabelaProduto>,

  ) {}

  async create(body: any) {
    let fornecedores = [];
    for (let fornecedor of body['fornecedores'])
      fornecedores.push(await this.providerRepository.findOne(fornecedor.id));

    body['fornecedores'] = fornecedores;
    const produto = await this.produtoRepository.create(body)
    
    const createdProduto: any = await this.produtoRepository.save(produto);
        if (produto) {
      if (body.tabelas) {
        body.tabelas.map(async tabela => {
          tabela.produto = createdProduto.id
          const table = await this.tabelaProdutoRepository.create(tabela);
          await this.tabelaProdutoRepository.save(table)
        }) 
      }
    }
    return createdProduto

  }

  async findAll() {
    return await this.produtoRepository.find({ where: { deleted: false } });
  }

  async update(id: number, data: any) {
    await this.produtoRepository.update(id, data);
  }

  async addEstoque(data: any) {
    const promises = [];
    for (const produto of data) {
      promises.push(this.produtoRepository.save(produto));
    }
    return await Promise.all(promises);
  }

  async findOne(id: number) {
    return await this.produtoRepository.findOne(id, {
      relations: ['fornecedores'],
    });
    // await this.produtoRepository.update(id, data);
  }

  async remove(produto: any) {
    let produtoEncontrado = await this.produtoRepository.findOne(produto.id);
    produtoEncontrado.deleted = produto.deleted;
    return await this.produtoRepository.save(produtoEncontrado).catch((e) => {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }
}
