import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/api/auth.service";
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";
import {PasswordService} from "../../services/password/password.service";
import {Password} from "../../core/password";

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
  @ViewChild('passwordInput', {static: true}) passwordInput!: ElementRef;
  @ViewChild('passwordStatusTag', {static: true}) passwordStatusTag!: ElementRef;

  constructor(
    private loginPopupService: LoginPopupServiceService,
    private passwordService: PasswordService
  ) {
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
          setTimeout(() => {
            this.loginPopupService.publish(false);
            this.passwordService.publish(new Password(password, result))
          })
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
