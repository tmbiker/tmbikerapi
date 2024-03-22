import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorredoresController } from './corredores.controller';
import { Corredores } from './corredores.entity';
import { CorredoresService } from './corredores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Corredores])],
  controllers: [CorredoresController],
  providers: [CorredoresService],
})
export class CorredoresModule {}
