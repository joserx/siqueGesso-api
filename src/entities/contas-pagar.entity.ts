import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { ProviderEntity } from 'src/entities/provider.entity';

@Entity()
export class ContasPagar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  formaPagamento: string;

  @Column({ nullable: true })
  plano: string;

  @Column({ nullable: true })
  vencimento: string;

  @Column({ nullable: true })
  valorBruto: number;

  @Column({ nullable: true })
  juros: number;

  @Column({ nullable: true })
  desconto: number;

  @Column({ nullable: true })
  compensado: string;

  @Column({ nullable: true })
  situacao: string;

  @Column({ nullable: true })
  unidade: string;

  @Column({ nullable: true })
  valorTotal: string;

  @Column({ nullable: true })
  fornecedor: string;

  //   @ManyToMany(() => ProviderEntity, (provider) => provider.produto)
  //   fornecedores: ProviderEntity[];

  @Column({ nullable: true })
  centroCusto: string;

  @Column({ nullable: true })
  data: string;

  @Column({ nullable: true })
  obs: string;

  @Column({ nullable: true })
  pedidoCompra: boolean

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true, default: false })
  deleted: boolean;
}
