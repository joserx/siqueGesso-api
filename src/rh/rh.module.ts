import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AusenciaModule } from 'src/ausencia/ausencia.module';
import { RhEntity } from 'src/entities/rh.entity';
import { ExamesModule } from 'src/exames/exames.module';
import { FaltasModule } from 'src/faltas/faltas.module';
import { VtModule } from 'src/vt/vt.module';
import { RhController } from './rh.controller';
import { RhService } from './rh.service';

@Module({
  imports: [TypeOrmModule.forFeature([RhEntity]), FaltasModule, AusenciaModule, ExamesModule, VtModule],
  controllers: [RhController],
  providers: [RhService]
})
export class RhModule {}
