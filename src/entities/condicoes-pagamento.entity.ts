import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProviderEntity } from './provider.entity';

@Entity()
export class CondicoesPagamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nome: string;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToMany(() => ProviderEntity, (provider) => provider.id)
  provider: ProviderEntity;
}
