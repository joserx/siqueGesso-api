import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    whatsApp: string;

    @Column({ nullable: false })
    tel_1: string;

    @Column({ nullable: false})
    ramal_1: string;

    @Column({ nullable: false })
    tel_2: string;

    @Column({ nullable: false})
    ramal_2: string;

    @Column({ nullable: false})
    email: string;

    @Column({ nullable: false })
    email_nf: string;

    @Column({ nullable: true })
    site: string;
}