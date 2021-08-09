import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./address.entity";

@Entity()
export class ClientEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable : true })
    name : string;

    @Column({ nullable : true })
    surname : string;

    @Column({ nullable : true })
    cpf : string;

    @Column({ nullable : true })
    rg : string;

    @Column({ nullable : true })
    cellphone : string;

    @Column({ nullable : true })
    telephone : string;

    @Column('timestamp', { nullable : true })
    birthDate : Date;

    @Column({ nullable : true })
    email : string;

    @Column({ nullable : true })
    subscription : string;

    @Column({ nullable : true })
    socialReason : string;

    @Column({ nullable : true })
    fantasyName : string;

    @Column({ nullable : true })
    ramal : string;

    @ManyToMany(() => AddressEntity, address => address.id, {cascade : true})
    @JoinTable()
    addresses : AddressEntity[];

}