import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpedicaoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  codigo: string;

  @Column()
  unidade: string;

  @Column({ nullable: true })
  status: string;

  @Column()
  respSeparacao: string;

  @Column()
  respDespacho: string;

  @Column('timestamp', { nullable: true })
  emissao: Date;

  @Column()
  cliente: string;

  @Column()
  motorista: string;

  @Column()
  placa: string;

  @Column()
  peso: string;

  @Column()
  observacoes: string;

  @Column()
  loja: string;

  @Column()
  vendedor: string;

  @Column()
  pedido: string;

  @Column()
  transportadora: string;

  @Column({ nullable: true })
  nPedido: number;
}
