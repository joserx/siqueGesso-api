import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tabela {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

}
