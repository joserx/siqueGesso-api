import * as bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany, OneToOne, JoinColumn, BeforeUpdate, ManyToOne, JoinTable } from "typeorm";
import { FileEntity } from './file.entity';

@Entity()
export class UsersEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', {default: 0})
    permission: number;

    @Column({unique: true})
    email: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @CreateDateColumn()
    date: Date;
    
    @Column('text', {select: false})
    password: string;

    @Column('boolean', { nullable : false , default : false})
    disabled : boolean;

    @ManyToOne(type => FileEntity, file => file.id, {nullable : true})
    @JoinTable()
    avatar : FileEntity;
    
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }

    @BeforeUpdate()
    async hashPassword2() {
        this.password = await bcrypt.hash(this.password, 12);
    }
    
}