import { Component } from '@angular/core';
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private isPopupDisplayed = false;

  constructor(
    private loginPopupState: LoginPopupServiceService
  ) {
    loginPopupState.event.subscribe(event => {
      this.isPopupDisplayed = event;
    })
  }

  showLoginPopup(event?: MouseEvent) {
    this.isPopupDisplayed = !this.isPopupDisplayed;
    this.loginPopupState.publish(this.isPopupDisplayed);
  }
}
