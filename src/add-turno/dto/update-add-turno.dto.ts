import { PartialType } from '@nestjs/mapped-types';
import { CreateAddTurnoDto } from './create-add-turno.dto';

export class UpdateAddTurnoDto extends PartialType(CreateAddTurnoDto) {}
