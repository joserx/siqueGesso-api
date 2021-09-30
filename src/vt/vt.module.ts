import { Module } from '@nestjs/common';
import { VtService } from './vt.service';
import { VtController } from './vt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VtEntity } from 'src/entities/vt.entity';

@Module({
  imports: [TypeOrmModule.forFeature(
    [VtEntity]
  )],
  controllers: [VtController],
  providers: [VtService],
  exports: [VtService]
})
export class VtModule {}
