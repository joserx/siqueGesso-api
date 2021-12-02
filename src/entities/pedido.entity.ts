import { ItemPedidoEntity } from "src/entities/item-pedido.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./produto.entity";


@Entity()
export class PedidoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("timestamp")
    data: Date

    @Column()
    loja: string

    @Column()
    vendedor: string

    @Column()
    cliente: string

    @Column()
    condPagamento: string

    @Column({nullable: true})
    pagPersonalizado: string

    @Column()
    tabPreco: string

    @Column()
    tabPersonalizado: string

    @Column({nullable: true})
    tipoVenda: number

    @OneToMany(()=> ItemPedidoEntity, item => item.pedido, { nullable: true,onDelete: "CASCADE", cascade: ['insert', 'update']})
    item: ItemPedidoEntity[]

    @Column({nullable: true})
    descontoGeral: string

    @Column()
    meioPagamento: string

    @Column()
    dias: number

    @Column()
    dataVencimento: Date

    @Column()
    status: string

    @Column()
    linkBoleto: string

    @Column()
    linkNf: string
    
    @Column()
    obs: string

    @Column()
    total: string

    @ManyToMany(() => Produto, produto => produto.pedido, { nullable: true, cascade: ['insert', 'update']})
    produto: Produto[]
}