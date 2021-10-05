import { PartialType } from '@nestjs/mapped-types';
import { CreateExpedicaoDto } from './create-expedicao.dto';

export class UpdateExpedicaoDto extends PartialType(CreateExpedicaoDto) {}
