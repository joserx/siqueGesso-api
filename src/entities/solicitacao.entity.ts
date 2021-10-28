import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmbarqueEntity } from "./embarque.entity";


@Entity()
export class SolicitacaoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: number

    @Column({nullable: true})
    data: Date

    @Column()
    cliente: string

    @Column()
    valor: string

    @Column()
    vendedor: string

    @Column()
    status: string

    @ManyToOne(()=> EmbarqueEntity, embarque => embarque.solicitacao, {cascade: ['insert', 'update'], onDelete: "CASCADE"})
    @JoinColumn()
    embarque: EmbarqueEntity[]
}
