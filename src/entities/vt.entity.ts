import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";

@Entity()
export class VtEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    name: string;

    @Column({nullable:true})
    workDays: number;

    @Column({nullable:true})
    vt: string;

    @Column({type: 'float', nullable: true})
    total: number;

    @Column({nullable: true})
    disabled: boolean;

    @Column({nullable:true})
    colabId: number

    @Column({type: 'float', nullable: true})
    originalTotal: number

    @ManyToOne(()=> RhEntity, rh => rh.vt, {cascade: true, onDelete: "CASCADE", nullable: true})
    rh: RhEntity[]
}
