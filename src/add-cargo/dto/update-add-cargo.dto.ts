import { PartialType } from '@nestjs/mapped-types';
import { CreateAddCargoDto } from './create-add-cargo.dto';

export class UpdateAddCargoDto extends PartialType(CreateAddCargoDto) {}
