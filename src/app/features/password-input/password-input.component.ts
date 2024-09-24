import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

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

  login(event?: MouseEvent) {
    const password = this.passwordInput.nativeElement.value;
    AuthService.login(password)
      .then(result => {
        console.log(result);
      });
  }
}
