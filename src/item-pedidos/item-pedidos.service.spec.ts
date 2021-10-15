import { Test, TestingModule } from '@nestjs/testing';
import { ItemPedidosService } from './item-pedidos.service';

describe('ItemPedidosService', () => {
  let service: ItemPedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemPedidosService],
    }).compile();

    service = module.get<ItemPedidosService>(ItemPedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
