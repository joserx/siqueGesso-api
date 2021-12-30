import { ProviderEntity } from 'src/provider/entities/provider.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PedidoEntity } from './pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  destinacao: string;

  @Column({ nullable: true })
  categoria: string;

  @Column({ nullable: true })
  sku: string;

  @Column({ nullable: true })
  ativo: boolean;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  unidade: string;

  @Column({ nullable: true })
  largura: number;

  @Column({ nullable: true })
  altura: number;

  @Column({ nullable: true })
  peso: number;

  @Column({ nullable: true })
  itens: number;

  @Column({ nullable: true })
  getinEan: string;

  @Column({ nullable: true })
  min: number;

  @Column({ nullable: true })
  max: number;

  @Column({ nullable: true })
  atual: number;

  @Column({ nullable: true })
  localizacao: string;

  @Column({ nullable: true })
  custoMedio: number;

  @Column({ nullable: true })
  precoMedio: number;

  @Column({ nullable: true })
  margemLucro: number;

  @Column({ nullable: true })
  comissao: string;

  @ManyToMany(() => ProviderEntity, (provider) => provider.produto, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  fornecedores: ProviderEntity[];

  @Column({ nullable: true })
  origem: string;

  @Column({ nullable: true })
  ncm: string;

  @Column({ nullable: true })
  cest: string;

  @Column({ nullable: true })
  tributos: string;

  @Column({ nullable: true })
  valorBaseIcms: string;

  @Column({ nullable: true })
  valorIcms: string;

  @Column({ nullable: true })
  valorIcmsProprio: string;

  @Column({ nullable: true })
  codigoTipi: string;

  @Column({ nullable: true })
  valorPis: string;

  @Column({ nullable: true })
  valorConfins: string;

  @Column({ nullable: true })
  infoAdd: string;

  @ManyToMany(() => PedidoEntity, (pedido) => pedido.produto, {
    nullable: true,
    cascade: true,
  })
  @JoinTable({ name: 'pedido_produto' })
  pedido: PedidoEntity[];

  @DeleteDateColumn()
  deleted_at: Date;

  // @Column({ nullable: true, default: false })
  // deleted: boolean;
}
