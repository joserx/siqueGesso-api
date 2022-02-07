import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class NovaMensagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dataDeCriacao: Date;

  @Column({ nullable: true })
  enviadoPor: number;

  @Column({ nullable: true })
  usuario: number;
}
