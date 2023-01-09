import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionController } from './action/action.controller';
import { ExecutorModule } from './executor/executor.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ExecutorModule],
  controllers: [AppController, ActionController],
  providers: [AppService],
})
export class AppModule {}
