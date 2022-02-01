import { Module } from '@nestjs/common';
import { NovaMensagemService } from './nova-mensagem.service';
import { NovaMensagemController } from './nova-mensagem.controller';

@Module({
  controllers: [NovaMensagemController],
  providers: [NovaMensagemService]
})
export class NovaMensagemModule {}
