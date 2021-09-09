import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class FilialEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable : true })
    nome: string;
}