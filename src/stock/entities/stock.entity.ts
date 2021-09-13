import { HttpException, HttpStatus } from "@nestjs/common";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 0, nullable: false })
    min: number;

    @Column({ default: 1000, nullable: false })
    max: number;

    @Column({ nullable: false })
    current: number;

    /*@Column({ nullable: false })
    localizacao: number;*/

}

