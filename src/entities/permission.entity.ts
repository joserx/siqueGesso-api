import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./user.entity";

@Entity()
export class PermissionEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    permission: number

    @OneToMany(()=> UsersEntity, user => user.permission, {nullable: true, onDelete: "SET NULL"})
    user: UsersEntity[]
}
