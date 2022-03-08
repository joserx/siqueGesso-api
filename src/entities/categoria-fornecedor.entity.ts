
import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class CategoriaFornecedorEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    nome: string;
  
    @Column({ nullable: true })
    status: boolean;
  
    @DeleteDateColumn()
    deleted_at: Date;
  }