import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";

@Entity()
export class ExameEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    status: number;

    @Column({nullable:true})
    tipo: string

    @Column('timestamp', {nullable:true})
    data: Date

    @Column('timestamp', {nullable:true})
    vencimento: Date

    @ManyToOne(()=>RhEntity, rh => rh.exame, {cascade: true, onDelete: "CASCADE", nullable: true})
    rh: RhEntity[];
}
