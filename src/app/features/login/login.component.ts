import {Component, ElementRef, ViewChild} from '@angular/core';
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";
import {PasswordService} from "../../services/password/password.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private isPopupDisplayed = false;
  @ViewChild('loginButton', {static: true}) loginButton!: ElementRef;

  constructor(
    private loginPopupState: LoginPopupServiceService,
    private passwordState: PasswordService,
  ) {
    loginPopupState.event.subscribe(event => {
      this.isPopupDisplayed = event;
    });
    passwordState.event.subscribe(event => {
      if (event.isValid) {
        this.loginButton.nativeElement.classList.add('login-hidden');
      }
    })
  }

  showLoginPopup(event?: MouseEvent) {
    this.isPopupDisplayed = !this.isPopupDisplayed;
    this.loginPopupState.publish(this.isPopupDisplayed);
  }
}
