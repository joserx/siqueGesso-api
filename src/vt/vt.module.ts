import { Module } from '@nestjs/common';
import { VtService } from './vt.service';
import { VtController } from './vt.controller';

@Module({
  controllers: [VtController],
  providers: [VtService]
})
export class VtModule {}
