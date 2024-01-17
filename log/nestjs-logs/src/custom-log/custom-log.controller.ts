import { Controller } from '@nestjs/common';
import { CustomLogService } from './custom-log.service';

@Controller('custom-log')
export class CustomLogController {
  constructor(private readonly customLogService: CustomLogService) {}
}
