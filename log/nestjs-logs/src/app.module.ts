import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLogModule } from './custom-log/custom-log.module';

@Module({
  imports: [CustomLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
