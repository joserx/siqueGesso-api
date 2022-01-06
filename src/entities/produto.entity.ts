import { ProviderEntity } from 'src/entities/provider.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PedidoEntity } from './pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destinacao: string;

  @Column()
  categoria: string;

  @Column()
  sku: string;

  @Column()
  ativo: boolean;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  unidade: string;

  @Column()
  largura: number;

  @Column()
  altura: number;

  @Column()
  peso: number;

  @Column()
  itens: number;

  @Column()
  getinEan: string;

  @Column()
  min: number;

  @Column()
  max: number;

  @Column()
  atual: number;

  @Column()
  localizacao: string;

  @Column()
  custoMedio: number;

  @Column()
  precoMedio: number;

  @Column()
  margemLucro: number;

  @Column()
  comissao: string;

  @ManyToMany(() => ProviderEntity, (provider) => provider.produto)
  fornecedores: ProviderEntity[];

  @Column()
  origem: string;

  @Column()
  ncm: string;

  @Column()
  cest: string;

  @Column()
  tributos: string;

  @Column()
  valorBaseIcms: string;

  @Column()
  valorIcms: string;

  @Column()
  valorIcmsProprio: string;

  @Column()
  codigoTipi: string;

  @Column()
  valorPis: string;

  @Column()
  valorConfins: string;

  @Column()
  infoAdd: string;

  @ManyToMany(() => PedidoEntity, (pedido) => pedido.produto, {
    nullable: true,
    cascade: true,
  })
  pedido: PedidoEntity[];

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true, default: false })
  deleted: boolean;
}
