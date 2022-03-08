import { Module } from '@nestjs/common';
import { ContasReceberService } from './contas-receber.service';
import { ContasReceberController } from './contas-receber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContasReceber } from 'src/entities/contas-receber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContasReceber])],
  controllers: [ContasReceberController],
  providers: [ContasReceberService],
})
export class ContasReceberModule {}
