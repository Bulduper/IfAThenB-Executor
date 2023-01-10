import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice(
    {
      transport: Transport.TCP,
      options: {
        port: +configService.get('EXECUTOR_TCP_PORT'),
        host: '0.0.0.0', // this was super important, without it microservices cant communicate
      },
    },
  );
  await app.startAllMicroservices();
}
bootstrap();
