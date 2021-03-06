import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PedidoCompraService } from './pedido-compra.service';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('pedido-compra')
export class PedidoCompraController {
  constructor(private readonly pedidoCompraService: PedidoCompraService) {}

  @Post()
  create(@Body() createPedidoCompraDto: CreatePedidoCompraDto) {
    console.log('controller',createPedidoCompraDto);
    
    return this.pedidoCompraService.create(createPedidoCompraDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.pedidoCompraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoCompraService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePedidoCompraDto: UpdatePedidoCompraDto,
  ) {
    return this.pedidoCompraService.update(+id, updatePedidoCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoCompraService.remove(+id);
  }
}
