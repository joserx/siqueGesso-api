import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FileEntity } from "./file.entity";
@Entity()
export class FilialEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable : true })
    nome: string;

    @Column({ nullable: true })
    cnpj: string;

    @Column({ nullable: true })
    logradouro: string

    @Column({ nullable: true })
    cep: string;

    @Column({ nullable: true })
    numero: number;

    @Column({ nullable: true })
    cidade: string;

    @Column({ nullable: true })
    pais: string;

    @Column({ nullable: true })
    capacidade: number;

    @ManyToOne(() => FileEntity, file => file.id, { nullable: true, cascade: true })
    @JoinTable()
    banner: FileEntity;
}