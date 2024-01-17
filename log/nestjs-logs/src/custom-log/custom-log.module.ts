import { Module } from '@nestjs/common';
import { CustomLogService } from './custom-log.service';

@Module({
  controllers: [],
  providers: [CustomLogService],
  exports: [CustomLogService],
})
export class CustomLogModule {}
