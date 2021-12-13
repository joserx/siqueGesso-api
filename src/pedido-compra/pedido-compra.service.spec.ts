import { Test, TestingModule } from '@nestjs/testing';
import { PedidoCompraService } from './pedido-compra.service';

describe('PedidoCompraService', () => {
  let service: PedidoCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoCompraService],
    }).compile();

    service = module.get<PedidoCompraService>(PedidoCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
