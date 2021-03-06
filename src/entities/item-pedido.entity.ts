import { PedidoEntity } from "src/entities/pedido.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  quantidade: number;

  @Column({ nullable: true })
  codigo: number;

  @Column({ nullable: true })
  desconto: string;

  @Column({ nullable: true })
  produto: string;

  @Column({ nullable: true })
  valorUnitario: number;

  @Column({ nullable: true })
  valorVenda: number;

  @Column()
  tipoRetirada: string;

  @Column({ nullable: true })
  prevRetirada: Date;

  @Column({ nullable: true })
  valorFrete: string;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  enderecoLoja: string;

  @Column({nullable: true})
  total: number

  @Column({nullable: true})
  estoque: number
    
  @Column({ nullable: true })
  tipoEntrega: string;


  @ManyToOne(() => PedidoEntity, (pedido) => pedido.item, {
    nullable: true,
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  pedido: PedidoEntity[];
}
