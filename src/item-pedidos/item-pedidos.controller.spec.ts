import { Test, TestingModule } from '@nestjs/testing';
import { ItemPedidosController } from './item-pedidos.controller';
import { ItemPedidosService } from './item-pedidos.service';

describe('ItemPedidosController', () => {
  let controller: ItemPedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemPedidosController],
      providers: [ItemPedidosService],
    }).compile();

    controller = module.get<ItemPedidosController>(ItemPedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
