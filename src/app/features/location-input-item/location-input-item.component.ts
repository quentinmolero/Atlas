import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";

@Component({
  selector: 'app-location-input-item',
  standalone: true,
  imports: [],
  templateUrl: './location-input-item.component.html',
  styleUrl: './location-input-item.component.css'
})
export class LocationInputItemComponent {
  @Input() placeName: string = "City name";
  @Input() locationNameWithCountry: string = "City name, country";
  @ViewChild('locationItem', {static: true}) locationItem!: ElementRef;

  constructor(
    private _addLocationPopupService: AddLocationPopupServiceService
  ) {
  }

  selectLocationItem() {
    this._addLocationPopupService.publishSelectItemEvent(this);
  }

  setSelectedStyle() {
    this.locationItem.nativeElement.classList.add('location-input-item-selected');
  }

  resetSelectedStyle() {
    this.locationItem.nativeElement.classList.remove('location-input-item-selected');
  }
}
