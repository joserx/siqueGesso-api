import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { RhModule } from './rh/rh.module';
import { ClientModule } from './client/client.module';
import { AddressModule } from './address/address.module';
import { ProviderModule } from './provider/provider.module';
import { FaltasModule } from './faltas/faltas.module';
import { FilialModule } from './filial/filial.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'sique_gesso',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [
        'src/migration/**/*.ts',
      ],
      subscribers: [
        'src/subscriber/**/*.ts',
      ],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
      },
    }),
    UserModule,
    FileModule,
    AuthModule,
    RhModule,
    ClientModule,
    AddressModule,
    ProviderModule,
    FilialModule,
    FaltasModule,
    StockModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
