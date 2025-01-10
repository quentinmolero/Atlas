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
  @ViewChild('mapboxLayer', {static: true}) mapboxLayer!: ElementRef;

  constructor(
    loginPopupService: LoginPopupServiceService,
  ) {
    loginPopupService.event.subscribe(event => {
      if (event) {
        this.showMapboxLayer();
        loginPopupService.getPasswordInputPopup().nativeElement.classList.remove('password-input-box-hidden');
      } else {
        this.hideMapboxLayer();
        loginPopupService.getPasswordInputPopup().nativeElement.classList.add('password-input-box-hidden');
      }
    });
  }

  showMapboxLayer() {
    this.mapboxLayer.nativeElement.classList.remove('map-box-layer-hidden');
    this.mapboxLayer.nativeElement.classList.add('map-box-layer');
  }

  hideMapboxLayer() {
    this.mapboxLayer.nativeElement.classList.remove('map-box-layer');
    this.mapboxLayer.nativeElement.classList.add('map-box-layer-hidden');
  }
}
