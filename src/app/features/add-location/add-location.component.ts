import {Component, ElementRef, ViewChild} from '@angular/core';
import {PasswordService} from "../../services/password/password.service";
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {
  private _isPopupDisplayed = false;
  @ViewChild('addLocation', {static: true}) addLocation!: ElementRef;

  constructor(
    private passwordStatus: PasswordService,
    private addLocationPopupService: AddLocationPopupServiceService
  ) {
    this.passwordStatus.event.subscribe(event => {
      if (event.isValid) {
        this.addLocation.nativeElement.classList.remove("add-location-hidden")
      }
    });
    this.addLocationPopupService.event.subscribe(event => {
      this._isPopupDisplayed = event;
    })
  }

  showAddLocationPopup(event?: MouseEvent) {
    this._isPopupDisplayed = !this._isPopupDisplayed;
    this.addLocationPopupService.publish(this._isPopupDisplayed);
  }
}
