import { PartialType } from '@nestjs/mapped-types';
import { CreateTabelaProdutoDto } from './create-tabela-produto.dto';

export class UpdateTabelaProdutoDto extends PartialType(CreateTabelaProdutoDto) {}
