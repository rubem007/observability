import { Module } from '@nestjs/common';
import { CustomLogService } from './custom-log.service';
import { CustomLogController } from './custom-log.controller';

@Module({
  controllers: [CustomLogController],
  providers: [CustomLogService],
  exports: [CustomLogService],
})
export class CustomLogModule {}
