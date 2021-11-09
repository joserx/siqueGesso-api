import { PedidoEntity } from "src/entities/pedido.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemPedidoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    quantidade: number

    @Column()
    desconto: string

    @Column()
    tipoRetirada: string
    
    @Column({nullable: true})
    prevRetirada: Date

    @Column()
    valorFrete: string

    @Column()
    endereco: string

    @ManyToOne(()=> PedidoEntity, pedido => pedido.item, {nullable: true, cascade: true, onDelete:"CASCADE"})
    pedido: PedidoEntity[]
}
