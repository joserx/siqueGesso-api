import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AddressEntity } from './address.entity';
import { CondicoesPagamentoEntity } from './condicoes-pagamento.entity';
import { PedidoEntity } from './pedido.entity';
import { Tabela } from './tabela.entity';

@Entity()
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  birthDateCompany: Date;

  @Column({ nullable: true })
  companyCellPhone: string;

  @Column({ nullable: true })
  companyTelephone: string;

  @Column({ nullable: true })
  companyEmail: string;

  @Column({ nullable: true })
  rg: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  subscription: string;

  @Column({ nullable: true })
  socialReason: string;

  @Column({ nullable: true })
  fantasyName: string;

  @Column({ nullable: true })
  ramal: string;

  @Column('boolean', { default: false, nullable: false })
  disabled: boolean;

  @ManyToMany(() => Tabela, { cascade: ['insert', 'update'], nullable: true })
  @JoinTable()
  tabela: Tabela[];

  @ManyToMany(() => CondicoesPagamentoEntity, (condicoes) => condicoes.client, {
    nullable: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  condicoesPagamento: CondicoesPagamentoEntity[];

  @Column({ nullable: true })
  obs: string;

  @Column({ nullable: true })
  restricao: string;

  @Column({ nullable: true })
  validade: string;

  @Column({ nullable: true })
  limiteCompra: number;

  @Column({ nullable: true })
  descontoMax: string;

  @Column({ nullable: true })
  obsCredito: string;

  @Column({ nullable: true })
  codigoVendedor: number;

  @Column({ nullable: true })
  vendedor: string;

  @ManyToMany(() => AddressEntity, (address) => address.id, { cascade: true })
  @JoinTable()
  addresses: AddressEntity[];

  /* Created_at e updated_at */
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  public updated_at: Date;
}
