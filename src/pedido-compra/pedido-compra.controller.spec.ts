import { Test, TestingModule } from '@nestjs/testing';
import { PedidoCompraController } from './pedido-compra.controller';
import { PedidoCompraService } from './pedido-compra.service';

describe('PedidoCompraController', () => {
  let controller: PedidoCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoCompraController],
      providers: [PedidoCompraService],
    }).compile();

    controller = module.get<PedidoCompraController>(PedidoCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
