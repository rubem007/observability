import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogService } from './custom-log/custom-log.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogService(),
  });
  await app.listen(3000);
}
bootstrap();
