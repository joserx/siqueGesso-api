import { Module } from '@nestjs/common';
import { ExpedicaoService } from './expedicao.service';
import { ExpedicaoController } from './expedicao.controller';

@Module({
  controllers: [ExpedicaoController],
  providers: [ExpedicaoService]
})
export class ExpedicaoModule {}
