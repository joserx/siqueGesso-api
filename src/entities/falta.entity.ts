import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";
@Entity()
export class FaltaEntity{
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

    @Column({nullable: true})
    periodo: string;

    @Column({nullable: true})
    tempo: number;

    @Column({nullable: true})
    diasAtestado: string;

    @Column({nullable: true})
    atestado: string;

    @ManyToOne(() => RhEntity, rh => rh.falta, { nullable: true, cascade: true})
    rh: RhEntity[];
}