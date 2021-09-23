import { PartialType } from '@nestjs/mapped-types';
import { CreateVtDto } from './create-vt.dto';

export class UpdateVtDto extends PartialType(CreateVtDto) {}
