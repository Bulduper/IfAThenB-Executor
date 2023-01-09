import { Injectable } from '@nestjs/common';
import { HttpRequestService } from './http-request/http-request.service';
import { MailerService } from './mailer/mailer.service';

@Injectable()
export class ExecutorService {
  constructor(
    private httpRequest: HttpRequestService,
    private mailerSvc: MailerService,
  ) {}

  async executeAction(action: any) {
    if (action.type === 'HTTP') {
      if (!action.properties?.url)
        throw new Error('Url not specified for HTTP trigger action!');
      const response = await this.httpRequest.post(
        action.properties.url,
        action?.body || {},
      );
      console.log('Action triggerred - HTTP request response: ', response);
      return response;
    } else if (action.type === 'EMAIL') {
      if (!action.properties)
        throw new Error(
          'No properties given! preperties.to & properites.content required!',
        );
      const response = await this.mailerSvc.sendEmail(action.properties);
      console.log('Email sent. Response: ', response);
      return response;
    }
  }
}
