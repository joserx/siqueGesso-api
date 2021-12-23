import { Provider } from '@nestjs/common';
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

@Entity()
export class Suprimento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => ProviderEntity, (provider) => provider.suprimento, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  fornecedores: ProviderEntity[];

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  codigo: string;

  @Column({ nullable: true })
  categoria: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  quantidade: string;

  @Column({ nullable: true })
  precoCusto: string;

  @Column({ nullable: true })
  estoqueAtual: string;

  @Column({ nullable: true })
  estoqueMin: string;

  @DeleteDateColumn()
  deleted_at: Date;
}
