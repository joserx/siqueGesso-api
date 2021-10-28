import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VeiculoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    placa: string

    @Column()
    uf: string

    @Column()
    cidade: string
    
    @Column()
    tipo: string

    @Column()
    marca: string

    @Column()
    cor: string

    @Column()
    fabricacao: string

    @Column()
    codigo: string

    @Column()
    rntrc: string

    @Column()
    capacidade: string

    @Column()
    tara: string

    @Column()
    capacidadeM3: string

    @Column({nullable: true})
    placa2: string

    @Column({nullable: true})
    placa3: string
}
