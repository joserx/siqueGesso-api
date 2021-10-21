import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Os campos de valor coloquei em string pois o valor com float point não estava entrando na tabela
@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    destinacao: string

    @Column()
    categoria: string

    @Column({nullable: true})
    codigo: string

    @Column()
    nome: string

    @Column({nullable: true})
    obs: string

    @Column()
    unidade: string

    @Column()
    largura: number

    @Column()
    altura: number

    @Column()
    peso: number

    @Column()
    itens: number

    @Column()
    getinEan: string
    
    @Column({nullable: true})
    tributario: string

    @Column()
    min: number

    @Column()
    max: number

    @Column()
    atual: number

    @Column()
    localizacao: string

    @Column()
    custoMedio: number

    @Column({nullable: true})
    precoMedio: number

    @Column()
    margemLucro: number

    @Column()
    comissao: string

    @Column({nullable: true})
    fornecedores: string

    @Column()
    ncm: string

    @Column()
    cest: string

    @Column()
    tributos: string

    @Column()
    valorBaseIcms: string

    @Column()
    valorIcms: string

    @Column()
    valorIcmsProprio: string

    @Column()
    codigoTipi: string

    @Column()
    valorPis: string

    @Column()
    valorConfins: string

    @Column()
    infoAdd: string

}
