import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ApplicationsService } from 'src/app/services/applications.service';
import { AuthService } from 'src/app/services/auth.service';
import { loadingGifUrl } from 'src/constants';
import { CreateApplicationDTO } from 'src/dtos/create-application.dto';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css'],
})
export class ApplyNowComponent implements OnInit {
  application: CreateApplicationDTO = {
    city: null,
    country: null,
    course: null,
    dateOfBirth: null,
    email: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    previousUniversity: null,
    referencedBy: null,
  };
  isSending: boolean = false;
  loadingGifUrl: string = loadingGifUrl;
  constructor(
    private applicationsService: ApplicationsService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async store() {
    this.isSending = true;
    for (var key in this.application) {
      if (this.application.hasOwnProperty(key)) {
        if (!this.application[key]) {
          this.isSending = false;
          this.alertService.toastError(`${key} should not be empty`);
          return;
        }
      }
    }

    try {
      await this.applicationsService.store(this.application);
      this.application = {
        city: null,
        country: null,
        course: null,
        dateOfBirth: null,
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        previousUniversity: null,
        referencedBy: null,
      };
      this.isSending = false;
      this.router.navigate(['/thank-you']);
      this.alertService.toastSuccess('Application sent successfully');
    } catch (err) {
      this.isSending = false;
      this.authService.handleHttpError(err);
    }
  }
}
