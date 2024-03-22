import { Module } from '@nestjs/common';
import { CorredoresModule } from './corredores/corredores/corredores.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), CorredoresModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
