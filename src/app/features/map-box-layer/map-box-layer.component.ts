import {Component, ElementRef, ViewChild} from '@angular/core';
import {PasswordInputComponent} from "../password-input/password-input.component";
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";

@Component({
  selector: 'app-map-box-layer',
  standalone: true,
    imports: [
        PasswordInputComponent
    ],
  templateUrl: './map-box-layer.component.html',
  styleUrl: './map-box-layer.component.css'
})
export class MapBoxLayerComponent {
  @ViewChild('passwordInputPopup', {static: true}) passwordInputPopup!: ElementRef;

  constructor(
    private loginPopupService: LoginPopupServiceService,
  ) {
    loginPopupService.event.subscribe(event => {
      if (event) {
        this.passwordInputPopup.nativeElement.classList.remove('map-box-layer-hidden');
        this.passwordInputPopup.nativeElement.classList.add('map-box-layer');
      } else {
        this.passwordInputPopup.nativeElement.classList.remove('map-box-layer');
        this.passwordInputPopup.nativeElement.classList.add('map-box-layer-hidden');
      }
    })
  }
}
