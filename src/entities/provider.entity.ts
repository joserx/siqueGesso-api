import { AddressEntity } from 'src/entities/address.entity';
import { PaymentCondition } from 'src/provider/entities/payment_condition.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contact } from 'src/provider/entities/contact.entity';
import { Produto } from 'src/entities/produto.entity';
import { Suprimento } from 'src/entities/suprimento.entity';
import { CondicoesPagamentoEntity } from './condicoes-pagamento.entity';

@Entity()
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  cnpj: string;

  @Column()
  fantasy_name: string;

  @Column()
  social_reason: string;

  @Column()
  tribute_code: string;

  @Column()
  contribuinte: string;

  @Column()
  state_registration: string;

  @Column({ default: false })
  is_exempt: boolean;

  @Column({ nullable: true })
  minimum_billing: string;

  @OneToOne(() => AddressEntity, (address) => address.id, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => Contact, (contact) => contact.provider, {
    cascade: ['insert', 'update'],
  })
  contacts: Contact[];

  // @ManyToMany(() => PaymentCondition, (paymentCond) => paymentCond.provider, {
  //   nullable: true,
  //   cascade: ['insert', 'update'],
  // })
  // payment_codition: PaymentCondition[];

  @ManyToMany(
    () => CondicoesPagamentoEntity,
    (condicoes) => condicoes.provider,
    {
      nullable: true,
      cascade: ['insert', 'update'],
    },
  )
  @JoinTable()
  payment_condition: CondicoesPagamentoEntity[];

  @ManyToMany(() => Produto, (produto) => produto.fornecedores, {
    // cascade: true,
  })
  @JoinTable({ name: 'produto_provider' })
  produto: Produto[];

  @ManyToMany(() => Suprimento, (suprimento) => suprimento.fornecedores, {
    cascade: true,
  })
  @JoinTable({ name: 'suprimento_provider' })
  suprimento: Suprimento[];

  @Column()
  first_payment: Date;

  @Column({ nullable: true })
  notes: string;

  @Column()
  last_payment: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
