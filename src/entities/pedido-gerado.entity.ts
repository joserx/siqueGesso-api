import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemPedidoEntity } from './item-pedido.entity';
import { Produto } from './produto.entity';

@Entity()
export class PedidoGeradoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp', { nullable: true })
  data: Date;

  @Column()
  loja: string;

  @Column()
  vendedor: string;

  @Column()
  cliente: string;

  @Column()
  condPagamento: string;

  @Column()
  pagPersonalizado: string;

  @Column()
  tabPreco: string;

  @Column({ nullable: true })
  tabPersonalizado: string;

  @OneToMany(() => ItemPedidoEntity, (item) => item.pedido, {
    nullable: true,
    onDelete: 'CASCADE',
    cascade: ['insert', 'update'],
  })
  item: ItemPedidoEntity[];

  @Column({ nullable: true })
  descontoGeral: string;

  @Column()
  tipoEntrega: string;

  @Column()
  enderecoEntrega: string;

  @Column()
  valorFreteEntrega: string;

  @Column()
  meioPagamento: string;

  @Column({ nullable: true })
  dias: number;

  @Column()
  dataVencimento: Date;

  @Column()
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
  produto: Produto[];
}
