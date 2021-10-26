import { SolicitacaoService } from "src/solicitacao/solicitacao.service";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SolicitacaoEntity } from "./solicitacao.entity";


@Entity()
export class EmbarqueEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sign: string

    @Column()
    driver: string

    @OneToMany(()=> SolicitacaoEntity, solicitacao => solicitacao.embarque, {cascade: true, onDelete: "CASCADE"})
    solicitacao: SolicitacaoEntity[]
}
