import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoEntity } from 'src/entities/veiculo.entity';

@Module({
  controllers: [VeiculosController],
  providers: [VeiculosService],
  imports: [TypeOrmModule.forFeature([
    VeiculoEntity
  ])]
})
export class VeiculosModule {}
