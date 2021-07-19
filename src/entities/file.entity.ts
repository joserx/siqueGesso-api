import * as bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany, OneToOne, JoinColumn, BeforeUpdate } from "typeorm";

@Entity()
export class FileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url : string;

    @Column()
    fileName : string;

    @Column({ default : new Date()})
    date : Date;
    
}