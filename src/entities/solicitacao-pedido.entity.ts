import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SolicitacaoPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column({ nullable: true })
  data: Date;

  @Column()
  nome: string;
}
