import { Module } from '@nestjs/common';
import { SinService } from './sin.service';
import { SinController } from './sin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinEntity } from '../entities/sin.entity';
import { SinGateway } from './sin.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([SinEntity])],
  providers: [SinService, SinGateway],
  exports: [SinService],
  controllers: [SinController],
})
export class SinModule {}
