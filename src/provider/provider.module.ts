import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderEntity } from './entities/provider.entity';
import { PaymentCondition } from './entities/payment_condition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity, PaymentCondition])],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
