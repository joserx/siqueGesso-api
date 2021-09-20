import { AddressEntity } from "src/entities/address.entity";
import { PaymentCondition } from "src/provider/entities/payment_condition.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "src/provider/entities/contact.entity";


@Entity()
export class ProviderEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable: false })
    category: string;

    @Column({ nullable: false })
    cnpj: string;

    @Column()
    fantasy_name: string;

    @Column()
    social_reason: string;

    @Column()
    tribute_code: string;

    @Column()
    contribuinte: string;

    @Column({ nullable: false})
    state_registration: string;

    @Column({ nullable: false, default: false })
    is_exempt: boolean;

    @Column({ nullable: false })
    municipal_registration: string;

    @OneToOne(() => AddressEntity, address => address.id, { nullable: false, cascade: ['insert', 'update'] })
    @JoinColumn()
    address: AddressEntity;

    @OneToMany(() => Contact, contact => contact.provider, { nullable: false, cascade: ['insert', 'update'] })
    contacts: Contact[]
    
    @ManyToMany(() => PaymentCondition, paymentCond => paymentCond.provider, { nullable: true, cascade:['insert', 'update'] })
    payment_codition: PaymentCondition[]

    @Column({ nullable: false })
    first_payment: Date;

    @Column({ nullable: true })
    notes: string;

    @Column({ nullable: false})
    last_payment: Date;

}
