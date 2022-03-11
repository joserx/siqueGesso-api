import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PermissionEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string
}
