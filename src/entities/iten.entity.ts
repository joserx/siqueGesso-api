import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { PedidoCompra } from './pedido-compra.entity';

@Entity()
export class Itens {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  produto: string;

  @Column({ nullable: true })
  quantidade: number;

  @Column({ nullable: true })
  valorUn: number;

  @Column({ nullable: true })
  subtotal: number;

  @ManyToMany(() => PedidoCompra, (pedido) => pedido.itensProduto, {
    nullable: true,
    cascade: true,
  })
  @JoinTable({ name: 'item_pedido' })
  pedido: PedidoCompra;
}
