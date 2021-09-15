import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RhEntity } from 'src/entities/rh.entity';
import { FaltasModule } from 'src/faltas/faltas.module';
import { RhController } from './rh.controller';
import { RhService } from './rh.service';

@Module({
  imports: [TypeOrmModule.forFeature([RhEntity]), FaltasModule],
  controllers: [RhController],
  providers: [RhService]
})
export class RhModule {}
