import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./produto.entity";
import { Tabela } from "./tabela.entity";

@Entity()
export class TabelaProduto {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Tabela, tabela => tabela.produto, {onDelete: 'NO ACTION'})
    tabela: Tabela

    @ManyToOne(() => Produto, produto => produto.tabelas, {onDelete: 'NO ACTION'})
    produto: Produto

    @Column()
    valor: string

}