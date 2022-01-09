import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { loadingGifUrl } from 'src/constants';
import { ContactUsMessageDTO } from 'src/dtos/contact-us-message.dto';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  message: ContactUsMessageDTO = {
    name: null,
    email: null,
    message: null,
  };
  isSending: boolean = false;
  loadingGifUrl: string = loadingGifUrl;
  constructor(
    private commonService: CommonService,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  async send() {
    this.isSending = true;
    for (var key in this.message) {
      if (this.message.hasOwnProperty(key)) {
        if (!this.message[key]) {
          this.isSending = false;
          this.alertService.toastError(`${key} should not be empty`);
          return;
        }
      }
    }

    try {
      await this.commonService.sendContactUsMessage(this.message);
      this.message = {
        name: null,
        email: null,
        message: null,
      };
      this.alertService.toastSuccess(
        'Message sent successfully. We will contact you soon!'
      );
      this.isSending = false;
    } catch (err) {
      this.isSending = false;
      this.authService.handleHttpError(err);
    }
  }
}
