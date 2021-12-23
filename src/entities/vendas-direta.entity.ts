import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VendasDireta {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('timestamp', { nullable: true })
  data: Date;

  @Column()
  loja: string;

  @Column()
  vendedor: string;

  @Column()
  cliente: string;
}
