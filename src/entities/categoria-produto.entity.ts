import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CategoriaProdutoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nome: string;
}
