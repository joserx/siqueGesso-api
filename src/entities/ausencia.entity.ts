import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";

@Entity()
export class AusenciaEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ nullable: true })
    colaborador: string;

    @Column({ nullable: true })
    cargo: string

    @Column('timestamp', { nullable : true })
    data: Date;

    @Column({ nullable : true })
    tipo: string;

    @Column({ nullable: true })
    de: Date

    @Column({ nullable: true })
    ate: Date

    @ManyToOne(() => RhEntity, rh => rh.ausencia, { nullable: true, cascade: true})
    rh: RhEntity[];
}
