import { Module } from '@nestjs/common';
import { NovaMensagemService } from './nova-mensagem.service';
import { NovaMensagemController } from './nova-mensagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovaMensagem } from 'src/entities/nova-mensagem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NovaMensagem])],
  controllers: [NovaMensagemController],
  providers: [NovaMensagemService],
  exports: [NovaMensagemService],
})
export class NovaMensagemModule {}
