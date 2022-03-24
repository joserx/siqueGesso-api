import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TabelaProduto } from "./tabela-produto.entity";

@Entity()
export class Tabela {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => TabelaProduto, tabela => tabela.tabela, {onDelete: 'CASCADE'} )
    produto: TabelaProduto[]
}
