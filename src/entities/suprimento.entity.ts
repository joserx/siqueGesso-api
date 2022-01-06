import { ProviderEntity } from 'src/entities/provider.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Suprimento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => ProviderEntity, (provider) => provider.suprimento)
  fornecedores: ProviderEntity[];

  @Column()
  nome: string;

  @Column()
  codigo: string;

  @Column()
  categoria: string;

  @Column()
  descricao: string;

  @Column()
  quantidade: string;

  @Column()
  precoCusto: string;

  @Column()
  estoqueAtual: string;

  @Column()
  estoqueMin: string;

  @DeleteDateColumn()
  deleted_at: Date;
}
