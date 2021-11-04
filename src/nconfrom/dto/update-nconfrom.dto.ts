import { PartialType } from '@nestjs/mapped-types';
import { CreateNconfromDto } from './create-nconfrom.dto';

export class UpdateNconfromDto extends PartialType(CreateNconfromDto) {}
