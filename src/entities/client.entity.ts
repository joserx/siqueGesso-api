import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./address.entity";

@Entity()
export class ClientEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    surname : string;

    @Column()
    cpf : string;

    @Column()
    rg : string;

    @Column({ nullable : true })
    cellphone : string;

    @Column({ nullable : true })
    telephone : string;

    @Column('timestamp')
    birthDate : Date;

    @Column()
    email : string;

    @ManyToMany(() => AddressEntity, address => address.id, {cascade : true})
    @JoinTable()
    addresses : AddressEntity[];

}