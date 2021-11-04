import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaixaEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: number

    @Column()
    data: Date

    @Column()
    sign: string

    @Column()
    driver: string
}
