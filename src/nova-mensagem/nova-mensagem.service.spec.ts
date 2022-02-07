import { Test, TestingModule } from '@nestjs/testing';
import { NovaMensagemService } from './nova-mensagem.service';

describe('NovaMensagemService', () => {
  let service: NovaMensagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovaMensagemService],
    }).compile();

    service = module.get<NovaMensagemService>(NovaMensagemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
