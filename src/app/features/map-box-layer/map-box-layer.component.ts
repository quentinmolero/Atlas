import {Component, ElementRef, ViewChild} from '@angular/core';
import {PasswordInputComponent} from "../password-input/password-input.component";
import {LoginPopupServiceService} from "../../services/display/login-popup-service.service";
import {LocationInputComponent} from "../location-input/location-input.component";
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";

@Component({
  selector: 'app-map-box-layer',
  standalone: true,
  imports: [
    PasswordInputComponent,
    LocationInputComponent
  ],
  templateUrl: './map-box-layer.component.html',
  styleUrl: './map-box-layer.component.css'
})
export class MapBoxLayerComponent {
  @ViewChild('mapboxLayer', {static: true}) mapboxLayer!: ElementRef;

  constructor(
    loginPopupService: LoginPopupServiceService,
    addLocationPopupService: AddLocationPopupServiceService,
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
    addLocationPopupService.event.subscribe(event => {
      if (event) {
        this.showMapboxLayer();
        addLocationPopupService.getAddLocationPopup().nativeElement.classList.remove('location-input-box-hidden');
      } else {
        this.hideMapboxLayer();
        addLocationPopupService.getAddLocationPopup().nativeElement.classList.add('location-input-box-hidden');
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
