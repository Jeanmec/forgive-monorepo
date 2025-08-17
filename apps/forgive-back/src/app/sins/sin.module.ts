import { Module } from '@nestjs/common';
import { SinService } from './sin.service';
import { SinController } from './sin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinEntity } from '../entities/sin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SinEntity])],
  providers: [SinService],
  exports: [SinService],
  controllers: [SinController],
})
export class SinModule {}
