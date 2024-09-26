import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/api/auth.service";
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css'
})
export class PasswordInputComponent {
  @ViewChild('passwordInputPopup', {static: true}) passwordInputPopup!: ElementRef;
  @ViewChild('passwordInput', {static: true}) passwordInput!: ElementRef;
  @ViewChild('passwordStatusTag', {static: true}) passwordStatusTag!: ElementRef;

  constructor(
    private loginPopupService: LoginPopupServiceService
  ) {
    loginPopupService.event.subscribe(event => {
      console.log(event);
      if (event) {
        this.passwordInputPopup.nativeElement.classList.remove('password-input-holder-hidden');
        this.passwordInputPopup.nativeElement.classList.add('password-input-holder');
      } else {
        this.passwordInputPopup.nativeElement.classList.remove('password-input-holder');
        this.passwordInputPopup.nativeElement.classList.add('password-input-holder-hidden');
      }
    })
  }

  closePopup() {
    this.loginPopupService.publish(false);
  }

  login(event?: MouseEvent) {
    const password = this.passwordInput.nativeElement.value;
    AuthService.login(password)
      .then(result => {
        if (result === true) {
          this.setPasswordStatus('Valid', 'password-input-status-tag-valid');
        } else {
          this.setPasswordStatus('Invalid', 'password-input-status-tag-invalid');
        }
      });
  }

  setPasswordStatus(status: string, statusClass: string) {
    this.passwordStatusTag.nativeElement.innerText = status;

    const statusTagClassList = this.passwordStatusTag.nativeElement.classList;
    statusTagClassList.forEach((statusTagClass: string) => {
      this.passwordStatusTag.nativeElement.classList.remove(statusTagClass);
    });
    this.passwordStatusTag.nativeElement.classList.add(statusClass);
  }
}
