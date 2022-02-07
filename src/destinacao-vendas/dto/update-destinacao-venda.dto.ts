import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinacaoVendaDto } from './create-destinacao-venda.dto';

export class UpdateDestinacaoVendaDto extends PartialType(CreateDestinacaoVendaDto) {}
