import { PartialType } from '@nestjs/mapped-types';
import { CreateTabelaDto } from './create-tabela.dto';

export class UpdateTabelaDto extends PartialType(CreateTabelaDto) {}
