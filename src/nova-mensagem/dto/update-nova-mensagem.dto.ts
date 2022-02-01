import { PartialType } from '@nestjs/mapped-types';
import { CreateNovaMensagemDto } from './create-nova-mensagem.dto';

export class UpdateNovaMensagemDto extends PartialType(CreateNovaMensagemDto) {}
