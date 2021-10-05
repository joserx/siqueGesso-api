import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { RhEntity } from "./rh.entity";

@Entity()
export class AddCargoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    nome: string;

}
