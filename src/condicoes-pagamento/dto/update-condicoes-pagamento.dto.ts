import { PartialType } from '@nestjs/mapped-types';
import { CreateCondicoesPagamentoDto } from './create-condicoes-pagamento.dto';

export class UpdateCondicoesPagamentoDto extends PartialType(CreateCondicoesPagamentoDto) {}
