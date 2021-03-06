import { PartialType } from '@nestjs/mapped-types';
import { AddressEntity } from 'src/entities/address.entity';
import { PaymentCondition } from 'src/provider/entities/payment_condition.entity';
import { CreateProviderDto } from './create-provider.dto';
import { Contact } from 'src/provider/entities/contact.entity';
import { CondicoesPagamentoEntity } from 'src/entities/condicoes-pagamento.entity';

export class UpdateProviderDto extends PartialType(CreateProviderDto) {
  category: string;
  cnpj: string;
  fantasy_name: string;
  social_reason: string;
  tribute_code: string;
  contribuinte: string;
  state_registration: string;
  is_exempt: boolean;
  minimum_billing: string;
  address: AddressEntity;
  contacts: Array<Contact>;
  payment_condition: CondicoesPagamentoEntity[];
  first_payment: Date;
  last_payment: Date;
  notes: string;
}
