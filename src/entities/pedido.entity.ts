import { ItemPedidoEntity } from 'src/entities/item-pedido.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  data: Date;

  @Column()
  loja: string;

  @Column()
  vendedor: string;

  @Column()
  cliente: string;

  @Column({nullable: true})
  statusPedido: string;

  @Column()
  condPagamento: string;

  @Column()
  clienteId: number;

  @Column({ nullable: true })
  pagPersonalizado: string;

  @Column()
  tabPreco: string;

  @Column({ nullable: true })
  tabPersonalizado: string;

  @Column({ nullable: true })
  tipoVenda: number;

  @OneToMany(() => ItemPedidoEntity, (item) => item.pedido, {
    onDelete: 'CASCADE',
    cascade: true,
    nullable: true,
  })
  item: ItemPedidoEntity[];

  @Column({ nullable: true })
  descontoGeral: string;

  @Column()
  meioPagamento: string;

  @Column({ nullable: true })
  dias: number;

  @Column()
  dataVencimento: Date;

  @Column({ nullable: true })
  status: string;

  @Column()
  linkBoleto: string;

  @Column()
  linkNf: string;

  @Column()
  obs: string;

  @Column()
  total: string;

  @ManyToMany(() => Produto, (produto) => produto.pedido, {
    nullable: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable({ name: 'pedido_produto' })
  produto: Produto[];

  /* Caso seja um pedido de venda direta */

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  numero: string;

  @Column({ nullable: true })
  bairro: string;

  @Column({ nullable: true })
  cidade: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  valorFreteEntrega: number;

  @Column({ nullable: true })
  aguradandoPagamento: string;

  @Column({ nullable: true })
  previsaoEntrega: Date;

  /* Created_at e updated_at */

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  public updated_at: Date;
}
