import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class HttpRequestService {
  constructor(private httpService: HttpService) {}

  async post(url: string, body: any): Promise<any> {
    return await firstValueFrom(
      this.httpService.post(url, body).pipe(
        catchError((error: any) => {
          console.error(error.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
  }
}
