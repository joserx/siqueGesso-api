import { PartialType } from '@nestjs/mapped-types';
import { CreateVendasDiretaDto } from './create-vendas-direta.dto';

export class UpdateVendasDiretaDto extends PartialType(CreateVendasDiretaDto) {}
