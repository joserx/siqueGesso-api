import { PartialType } from '@nestjs/mapped-types';
import { CreateBaixaDto } from './create-baixa.dto';

export class UpdateBaixaDto extends PartialType(CreateBaixaDto) {}
