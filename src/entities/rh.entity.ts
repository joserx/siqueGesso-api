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

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column('timestamp')
    birthDate: Date;

    @Column()
    rg: string;

    @Column('timestamp')
    rgExpedicao: Date;

    @Column()
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

    @Column()
    scholarship: string;

    @Column()
    nacionality: string;

    @Column()
    naturality: string;

    @Column({ nullable: true })
    motherName: string;

    @Column({ nullable: true })
    fatherName: string;

    @Column()
    cep: string;

    @Column()
    street: string;

    @Column()
    addressNumber: string;

    @Column()
    addressComplement: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    telephone: string;

    @Column()
    whatsapp: string;

    @Column()
    emergencyTelephone: string;

    @Column()
    personalEmail: string;

    @Column({ nullable: true })
    corporativeEmail: string;

    @Column()
    department: string;

    @Column()
    role: string;

    @Column()
    contractType: string;

    @Column()
    shift: string;

    @Column()
    paycheck: number;

    @Column('timestamp')
    admission: Date;

    @Column()
    experiencePeriod: string;

    @Column('timestamp', { nullable: true })
    fireDate: Date;

    @Column({ nullable: true })
    pis: string;

    @Column({ nullable: true })
    mei: string;

    @Column()
    bank: string;

    @Column()
    bankAccountType: string;

    @Column()
    bankAgency: string;

    @Column()
    bankAccountNumber: string;

    @Column({ nullable: false, default: 1 })
    status: number;

    @Column()
    filial: string;

    @Column('timestamp', { nullable: true })
    lastExam: Date;

    @Column('timestamp', { nullable: true })
    nextExam: Date;

    @Column('timestamp', { nullable: true })
    vacationDueDate: Date;

    @Column({ nullable: true })
    workDays: number;

    @Column({ nullable: true })
    conducaoIda: number;

    @Column({ nullable: true })
    conducaoVolta: number;

    @Column({  nullable: true})
    linesNames: string;

    @Column({ nullable: true })
    totalValue: number;

    @Column({ nullable: true })
    tshirtSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryTshirt: Date;

    @Column({ nullable: true })
    pantsSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryPants: Date;

    @Column({ nullable: true })
    shoesSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryShoes: Date;

    @Column({ nullable: true })
    beltSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryBelt: Date;

    @Column({ nullable: true })
    glovesSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryGloves: Date;

    @Column({ nullable: true })
    jacketSize: string;

    @Column('timestamp', { nullable: true })
    lastDeliveryJacket: Date;

    @Column({ nullable: true, type: "float" })
    duplaFuncao: number;

    @OneToMany(()=>FaltaEntity, falta=> falta.rh, { nullable: true, cascade:['insert', 'update']})
    falta: FaltaEntity[];
}