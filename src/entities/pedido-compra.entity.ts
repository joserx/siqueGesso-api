import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  data: string;

  @Column({ nullable: true })
  fornecedor: string;

  @Column({ nullable: true })
  razaoSocial: string;

  @Column({ nullable: true })
  cnpj: number;

  @Column({ nullable: true })
  cep: number;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  complemento: string;

  //   @Column()
  //   itens: string;

  @Column({ nullable: true })
  subtotal: number;

  @Column({ nullable: true })
  desconto: number;

  @Column({ nullable: true })
  frete: number;

  @Column({ nullable: true })
  encargos: string;

  @Column({ nullable: true })
  valorTotal: number;

  @Column({ nullable: true })
  condPagamento: number;

  @Column({ nullable: true })
  dataVenc: number;

  @Column({ nullable: true })
  meioPag: number;

  @Column({ nullable: true })
  obs: string;
}
