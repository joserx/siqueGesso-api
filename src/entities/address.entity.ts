import { Provider } from '@nestjs/common';
import { ProviderEntity } from 'src/entities/provider.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  neighborhood: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;
}
