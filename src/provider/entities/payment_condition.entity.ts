import { ProviderEntity } from "src/provider/entities/provider.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PaymentCondition {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => ProviderEntity, provider => provider.payment_codition, { cascade: ['insert', 'update']})
    @JoinTable()
    provider: ProviderEntity[]

}