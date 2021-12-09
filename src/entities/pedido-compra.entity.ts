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

  @Column()
  data: string;

  @Column()
  fornecedor: string;

  @Column()
  razaoSocial: string;

  @Column()
  cnpj: number;

  @Column()
  cep: number;

  @Column()
  endereco: string;

  @Column()
  complemento: string;

  //   @Column()
  //   itens: string;

  @Column()
  subtotal: number;

  @Column()
  desconto: number;

  @Column()
  frete: number;

  @Column()
  encargos: string;

  @Column()
  valorTotal: number;

  @Column()
  condPagamento: number;

  @Column()
  dataVenc: number;

  @Column()
  meioPag: number;

  @Column()
  obs: string;
}
