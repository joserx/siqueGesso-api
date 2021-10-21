import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class SolicitacaoPedidoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: number

    @Column()
    data: Date

    @Column()
    nome: string
}
