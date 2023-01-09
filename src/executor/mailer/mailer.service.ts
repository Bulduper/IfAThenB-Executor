import { Injectable } from '@nestjs/common';
import config from './mailer.config';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { Transporter } from 'nodemailer';
@Injectable()
export class MailerService {
  transporter!: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport(config);
  }

  checkParams(params: any) {
    if (!params.to)
      throw new Error('No recepient!. Please specify "to" property');
    if (!params.content)
      throw new Error('No recepient!. Please specify "content" property');
  }

  sendEmail(params: any) {
    this.checkParams(params);
    console.log('Sending email to ' + params.to);
    return this.transporter.sendMail({
      from: params.from || '"IfAThenB Service" <siema@horyzont.eu>',
      to: params.to,
      subject: params.subject || 'Email from ifAThenB',
      text: 'Hello world?',
      html: params.content,
      // headers: { 'x-myheader': 'test header' }
    });
  }
}
