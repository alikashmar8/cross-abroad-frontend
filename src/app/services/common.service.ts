import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from 'src/api-constants';
import { ContactUsMessageDTO } from 'src/dtos/contact-us-message.dto';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  sendContactUsMessage(message: ContactUsMessageDTO) {
    return this.http.post(apiEndpoint + 'send-contact-us-message', {
      ...message,
    }).toPromise();
  }

  constructor(private http: HttpClient) {}
}
