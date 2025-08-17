import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SinModule } from './sins/sin.module';

@Module({
  imports: [DatabaseModule, SinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
