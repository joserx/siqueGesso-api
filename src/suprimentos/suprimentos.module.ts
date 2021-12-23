import { Module } from '@nestjs/common';
import { SuprimentosService } from './suprimentos.service';
import { SuprimentosController } from './suprimentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suprimento } from 'src/entities/suprimento.entity';
import { ProviderEntity } from 'src/provider/entities/provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suprimento, ProviderEntity])],
  controllers: [SuprimentosController],
  providers: [SuprimentosService],
  exports: [SuprimentosService],
})
export class SuprimentosModule {}
