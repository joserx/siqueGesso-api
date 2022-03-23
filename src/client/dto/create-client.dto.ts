import { AddressEntity } from "src/entities/address.entity";
import { CondicoesPagamentoEntity } from "src/entities/condicoes-pagamento.entity";
import { Tabela } from "src/entities/tabela.entity";

export class CreateClientDto{
  name: string;
  surname: string;
  cpf: string;
  cnpj: string;
  birthDateCompany: Date;
  companyCellPhone: string;
  companyTelephone: string;
  companyEmail: string;
  rg: string;
  cellphone: string;
  telephone: string;
  birthDate: Date;
  email: string;
  subscription: string;
  socialReason: string;
  fantasyName: string;
  ramal: string;
  disabled: boolean;
  tabela: Tabela[];
  condicoesPagamento: CondicoesPagamentoEntity[];
  obs: string;
  restricao: string;
  validade: string;
  limiteCompra: number;
  descontoMax: string;
  obsCredito: string;
  codigoVendedor: number;
  vendedor: string;
  addresses: AddressEntity[];
}