import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from 'src/api-constants';
import { CreateApplicationDTO } from 'src/dtos/create-application.dto';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  store(application: CreateApplicationDTO) {
    return this.http
      .post(apiEndpoint + 'applications', { ...application })
      .toPromise();
  }

  constructor(private http: HttpClient) {}
}
