import { PartialType } from '@nestjs/mapped-types';
import { CreateContasReceberDto } from './create-contas-receber.dto';

export class UpdateContasReceberDto extends PartialType(CreateContasReceberDto) {}
