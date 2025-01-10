import {Component} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent {
  constructor(
    private _addLocationPopupService: AddLocationPopupServiceService,
  ) {
  }
}
