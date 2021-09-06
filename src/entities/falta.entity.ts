import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";
@Entity()
export class FaltaEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable : true })
    data: Date;

    @Column({ nullable : true })
    tipo: string;

    @ManyToOne(()=>RhEntity, rh=> rh.falta, { nullable: true, cascade: true})
    rh: RhEntity[];
}