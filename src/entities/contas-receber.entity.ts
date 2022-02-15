import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class ContasReceber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  formaRecebimento: string;

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
  situação: string;

  @Column({ nullable: true })
  unidade: string;

  @Column({ nullable: true })
  valorTotal: number;

  @Column({ nullable: true })
  cliente: string;

  @Column({ nullable: true })
  centroCusto: string;

  @Column({ nullable: true })
  data: string;

  @Column({ nullable: true })
  obs: string;
}
