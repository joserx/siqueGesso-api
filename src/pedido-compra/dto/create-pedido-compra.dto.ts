import { Itens } from "src/entities/iten.entity";

export class CreatePedidoCompraDto {

        data?: string;
        fornecedor?: string;
        faturamentoMinimo?: number;
        razaoSocial?: string;
        cnpj?: string;
        cep?: string;
        endereco?: string;
        complemento?: string;
        itensProduto?: Itens;
        desconto?: number;
        frete?: number;
        encargos?: string;
        valorTotal?: string;
        condicoesPagamento?: [];
        dataVenc?: string;
        status?: string;
        obs?: string;
}

