import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';

import { Itens } from './iten.entity';

@Entity()
export class PedidoCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  data: string;

  @Column({ nullable: true })
  fornecedor: string;

  @Column({ nullable: true })
  faturamentoMinimo: number;

  @Column({ nullable: true })
  razaoSocial: string;

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  complemento: string;

  @ManyToMany(() => Itens, (item) => item.pedido, {
    nullable: true,
    cascade: ['insert', 'update'],
  })
  itensProduto: Itens;

  @Column({ nullable: true })
  desconto: number;

  @Column({ nullable: true })
  frete: number;

  @Column({ nullable: true })
  encargos: string;

  @Column({ nullable: true })
  valorTotal: string;

  @Column({ nullable: true })
  condPagamento: string;

  @Column({ nullable: true })
  dataVenc: string;

  @Column({ nullable: true })
  meioPag: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  obs: string;

  @Column({default: false})
  aceite: boolean

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true, default: false })
  deleted: boolean;
}
