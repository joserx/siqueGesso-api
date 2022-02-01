import { Test, TestingModule } from '@nestjs/testing';
import { NovaMensagemController } from './nova-mensagem.controller';
import { NovaMensagemService } from './nova-mensagem.service';

describe('NovaMensagemController', () => {
  let controller: NovaMensagemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovaMensagemController],
      providers: [NovaMensagemService],
    }).compile();

    controller = module.get<NovaMensagemController>(NovaMensagemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
