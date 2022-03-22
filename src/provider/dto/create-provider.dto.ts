import { AddressEntity } from "src/entities/address.entity";
import { CondicoesPagamentoEntity } from "src/entities/condicoes-pagamento.entity";
import { Contact } from "src/provider/entities/contact.entity";
import { PaymentCondition } from "src/provider/entities/payment_condition.entity";

export class CreateProviderDto {

    category: string;
    cnpj: string;
    fantasy_name: string;
    social_reason: string;
    tribute_code: string;
    contribuinte: string;
    state_registration: string;
    is_exempt: boolean;
    address: AddressEntity;
    contacts: Array<Contact>
    payment_condition: CondicoesPagamentoEntity[];
    first_payment: Date;
    last_payment: Date;
    notes: string;
}
