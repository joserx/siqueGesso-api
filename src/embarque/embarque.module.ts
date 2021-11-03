import { Module } from '@nestjs/common';
import { EmbarqueService } from './embarque.service';
import { EmbarqueController } from './embarque.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmbarqueEntity } from 'src/entities/embarque.entity';
import { SolicitacaoModule } from 'src/solicitacao/solicitacao.module';

@Module({
  controllers: [EmbarqueController],
  providers: [EmbarqueService],
  imports: [TypeOrmModule.forFeature([
    EmbarqueEntity
  ]), SolicitacaoModule]
})
export class EmbarqueModule {}
