import { PartialType } from '@nestjs/mapped-types';
import { CreateContasPagarDto } from './create-contas-pagar.dto';

export class UpdateContasPagarDto extends PartialType(CreateContasPagarDto) {}
