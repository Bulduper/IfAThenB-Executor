import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExecutorService } from './executor.service';
import { HttpRequestService } from './http-request/http-request.service';
import { MailerService } from './mailer/mailer.service';

@Module({
  imports: [HttpModule],
  providers: [ExecutorService, HttpRequestService, MailerService],
  exports: [ExecutorService],
})
export class ExecutorModule {}
