import { Module } from '@nestjs/common';
import { AddTurnoService } from './add-turno.service';
import { AddTurnoController } from './add-turno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddTurnoEntity } from 'src/entities/add-turno.entity';

@Module({
  controllers: [AddTurnoController],
  providers: [AddTurnoService],
  imports: [TypeOrmModule.forFeature([
    AddTurnoEntity
  ])]
})
export class AddTurnoModule {}
