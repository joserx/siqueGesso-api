import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProviderEntity } from '../../entities/provider.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  name: string;

  @Column({ nullable: true })
  whatsApp: string;

  @Column({ nullable: true })
  tel_1: string;

  @Column({ nullable: true })
  ramal_1: string;

  @Column({ nullable: true })
  tel_2: string;

  @Column({ nullable: true })
  ramal_2: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  email_nf: string;

  @Column({ nullable: true })
  site: string;

  @ManyToOne(() => ProviderEntity, (provider) => provider.contacts, {
    cascade: true,
  })
  provider: ProviderEntity;
}
