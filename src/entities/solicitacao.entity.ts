import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(() => EmbarqueEntity, {nullable: true})
    embarque: EmbarqueEntity
}
