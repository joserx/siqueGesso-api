import { Module } from '@nestjs/common';
import { NconfromService } from './nconfrom.service';
import { NconfromController } from './nconfrom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NconfromEntity } from 'src/entities/nconfrom.entity';

@Module({
  controllers: [NconfromController],
  providers: [NconfromService],
  imports: [TypeOrmModule.forFeature([
    NconfromEntity
  ])]
})
export class NconfromModule {}
