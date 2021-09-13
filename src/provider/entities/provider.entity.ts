import { AddressEntity } from "src/entities/address.entity";
import { Contact } from "src/entities/contact.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProviderEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable: false })
    category: string;

    @Column({ nullable: false })
    cnpg: string;

    @Column()
    fantasy_name: string;

    @Column()
    social_reason: string;

    /*@Column()
    tribute: string;*/

    /*@Column()
    contribuinte: string;*/

    @Column({ nullable: false})
    state_registration: string;

    @Column({ nullable: false, default: false })
    is_exempt: boolean;

    @Column({ nullable: false })
    municipal_registration: string;

    @OneToMany(() => AddressEntity, address => address.id, { nullable: false, cascade: ['insert', 'update'] })
    address: AddressEntity;

    @OneToMany(() => Contact, contact => contact.id, { nullable: false, cascade: ['insert', 'update'] })
    contacts: Contact[]

    /*
    @OneToMany()
    payment_codition
    */

    @Column({ nullable: false })
    first_payment: Date;

    @Column({ nullable: false})
    last_payment: Date;

    @Column({ nullable: true })
    notes: string;


}
