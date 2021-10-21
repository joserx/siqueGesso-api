import { SolicitacaoService } from "src/solicitacao/solicitacao.service";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SolicitacaoEntity } from "./solicitacao.entity";


@Entity()
export class EmbarqueEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    placa: string

    @Column()
    motorista: string
}
