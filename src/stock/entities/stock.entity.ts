import { HttpException, HttpStatus } from "@nestjs/common";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0 })
    min: number;

    @Column({ default: 1000 })
    max: number;

    @Column({})
    current: number;

    @Column({})
    localizacao: string;

}

