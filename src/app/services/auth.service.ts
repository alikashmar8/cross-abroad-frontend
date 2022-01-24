import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private alertService: AlertService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  handleHttpError(err: HttpErrorResponse) {
    switch (err.error.statusCode) {
      case 404:
      case 400:
        Array.isArray(err.error.message)
          ? err.error.message.forEach((message) => {
              this.alertService.toastNotification(
                message,
                DialogLayoutDisplay.DANGER
              );
            })
          : this.alertService.toastNotification(
              err.error.message,
              DialogLayoutDisplay.DANGER
            );
        break;
      default:
        this.alertService.toastNotification(
          'Unexpected error, please try again later',
          DialogLayoutDisplay.DANGER
        );
        break;
    }
  }
}
