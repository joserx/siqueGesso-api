import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ProviderEntity } from "./provider.entity";


@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    name: string;

    @Column({})
    whatsApp: string;

    @Column({})
    tel_1: string;

    @Column({})
    ramal_1: string;

    @Column({})
    tel_2: string;

    @Column({})
    ramal_2: string;

    @Column({})
    email: string;

    @Column({})
    email_nf: string;

    @Column({ nullable: true })
    site: string;

    @ManyToOne(() => ProviderEntity, provider => provider.contacts, { cascade: true })
    provider: ProviderEntity
}