import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProviderEntity {

    @PrimaryGeneratedColumn()
    id : number;

}
