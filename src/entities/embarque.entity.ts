import { SolicitacaoService } from "src/solicitacao/solicitacao.service";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RhEntity } from "./rh.entity";
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

    @Column('timestamp')
    data: Date

    @ManyToOne(()=> RhEntity, rh => rh.embarque, {cascade: true, onDelete: "CASCADE"})
    rh: RhEntity[]
}
