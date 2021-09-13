import { FaltasService } from "src/faltas/faltas.service";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany, OneToOne, JoinColumn, BeforeUpdate, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { FaltaEntity } from "./falta.entity";
import { FileEntity } from "./file.entity";
import { UsersEntity } from "./user.entity";

@Entity()
export class RhEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('boolean', { nullable: false, default: false })
    disabled: boolean;

    @Column({ nullable: false, default: new Date() })
    date: Date;

    @ManyToOne(type => FileEntity, file => file.id, { nullable: true, cascade: true })
    @JoinTable()
    avatar: FileEntity;

    @ManyToOne(type => UsersEntity, user => user.id, { nullable: false, cascade: true })
    @JoinTable()
    createdBy: UsersEntity;

    @ManyToMany(() => FileEntity, { cascade: true })
    @JoinTable()
    anexes : FileEntity[];

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    surname: string;

    @Column({ nullable: true })
    birthDate: Date;

    @Column({ nullable: true })
    rg: string;

    @Column({ nullable: true })
    rgExpedicao: Date;

    @Column({ nullable: true })
    rgOrgaoEmissor: string;

    @Column({ nullable: true })
    cnpj: string;

    @Column({ nullable: true })
    cnh: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    civilState: string;

    @Column({ nullable: true })
    deficiency: string;

    @Column({ nullable: true })
    scholarship: string;

    @Column({ nullable: true })
    nacionality: string;

    @Column({ nullable: true })
    naturality: string;

    @Column({ nullable: true })
    motherName: string;

    @Column({ nullable: true })
    fatherName: string;

    @Column({ nullable: true })
    cep: string;

    @Column({ nullable: true })
    street: string;

    @Column({ nullable: true })
    addressNumber: string;

    @Column({ nullable: true })
    addressComplement: string;

    @Column({ nullable: true })
    neighborhood: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    telephone: string;

    @Column({ nullable: true })
    whatsapp: string;

    @Column({ nullable: true })
    emergencyTelephone: string;

    @Column({ nullable: true })
    personalEmail: string;

    @Column({ nullable: true })
    corporativeEmail: string;

    @Column({ nullable: true })
    department: string;

    @Column({ nullable: true })
    role: string;

    @Column({ nullable: true })
    contractType: string;

    @Column({ nullable: true })
    shift: string;

    @Column({ nullable: true })
    paycheck: number;

    @Column({ nullable: true})
    admission: Date;

    @Column({ nullable: true })
    experiencePeriod: string;

    @Column({ nullable: true})
    fireDate: Date;

    @Column({ nullable: true })
    pis: string;

    @Column({ nullable: true })
    mei: string;

    @Column({ nullable: true })
    bank: string;

    @Column({ nullable: true })
    bankAccountType: string;

    @Column({ nullable: true })
    bankAgency: string;

    @Column({ nullable: true })
    bankAccountNumber: string;

    @Column({ nullable: false, default: 1 })
    status: number;

    @Column({ nullable: true })
    filial: string;

    @Column({ nullable: true })
    lastExam: Date;

    @Column({ nullable: true })
    nextExam: Date;

    @Column({ nullable: true })
    vacationDueDate: Date;

    @Column({ nullable: true })
    workDays: number;

    @Column({ nullable: true })
    conducaoIda: number;

    @Column({ nullable: true })
    conducaoVolta: number;

    @Column({ nullable: true })
    linesNames: string;

    @Column({ nullable: true })
    totalValue: number;

    @Column({ nullable: true })
    tshirtSize: string;

    @Column({ nullable: true })
    lastDeliveryTshirt: Date;

    @Column({ nullable: true })
    pantsSize: string;

    @Column({ nullable: true })
    lastDeliveryPants: Date;

    @Column({ nullable: true })
    shoesSize: string;

    @Column({ nullable: true })
    lastDeliveryShoes: Date;

    @Column({ nullable: true })
    beltSize: string;

    @Column({ nullable: true })
    lastDeliveryBelt: Date;

    @Column({ nullable: true })
    glovesSize: string;

    @Column({ nullable: true })
    lastDeliveryGloves: Date;

    @Column({ nullable: true })
    jacketSize: string;

    @Column({ nullable: true  })
    lastDeliveryJacket: Date;

    @Column({ nullable: true, type: "float" })
    duplaFuncao: number;

    @OneToMany(()=>FaltaEntity, falta=> falta.rh, {nullable: true, cascade:['insert', 'update']})
    falta: FaltaEntity;
}