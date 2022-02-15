import { Module } from '@nestjs/common';
import { ContasPagarService } from './contas-pagar.service';
import { ContasPagarController } from './contas-pagar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContasPagar } from 'src/entities/contas-pagar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContasPagar])],
  controllers: [ContasPagarController],
  providers: [ContasPagarService],
})
export class ContasPagarModule {}
