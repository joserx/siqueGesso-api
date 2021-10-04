import { Module } from '@nestjs/common';
import { AddCargoService } from './add-cargo.service';
import { AddCargoController } from './add-cargo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddCargoEntity } from 'src/entities/add-cargo.entity';

@Module({
  controllers: [AddCargoController],
  providers: [AddCargoService],
  imports: [TypeOrmModule.forFeature([
    AddCargoEntity
  ])]
})
export class AddCargoModule {}
