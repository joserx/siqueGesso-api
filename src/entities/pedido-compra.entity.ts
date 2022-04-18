import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CondicoesPagamentoEntity } from './condicoes-pagamento.entity';

import { Itens } from './iten.entity';
import { ProviderEntity } from './provider.entity';

@Entity()
export class PedidoCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  data: string;

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

  @OneToMany(() => CondicoesPagamentoEntity, (condicoes) => condicoes.id)
  @JoinColumn()
  condicoesPagamento: CondicoesPagamentoEntity[];

  @ManyToOne(() => ProviderEntity, (providerEntity) => providerEntity.id, {
    cascade: false
  })
  @JoinColumn()
  fornecedor: ProviderEntity;

  @Column({ nullable: true })
  dataVenc: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  obs: string;

  @Column({ default: false })
  aceite: boolean;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true, default: false })
  deleted: boolean;
}
