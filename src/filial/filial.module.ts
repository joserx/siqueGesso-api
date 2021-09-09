import { Module } from '@nestjs/common';
import { FilialService } from './filial.service';
import { FilialController } from './filial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilialEntity } from 'src/entities/filial.entity';

@Module({
  controllers: [FilialController],
  providers: [FilialService],
  imports: [TypeOrmModule.forFeature([
    FilialEntity
  ])]
})
export class FilialModule {}
