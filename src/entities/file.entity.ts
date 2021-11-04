import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url : string;

    @Column()
    fileName : string;

    @Column({ nullable: true })
    originalName: string

    @Column({ default : new Date()})
    date : Date;
    
}