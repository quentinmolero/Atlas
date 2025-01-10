import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent implements AfterViewInit {
  @ViewChild('locationInputBox', {static: true}) locationInputBox!: ElementRef;

  constructor(
    private _addLocationPopupService: AddLocationPopupServiceService,
  ) {
  }

  ngAfterViewInit() {
    this._addLocationPopupService.setAddLocationPopup(this.locationInputBox);
  }
}
