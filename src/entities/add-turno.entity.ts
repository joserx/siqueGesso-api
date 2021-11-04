import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AddTurnoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string
}
