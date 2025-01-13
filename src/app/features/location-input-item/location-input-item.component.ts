import {Component, Input} from '@angular/core';

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
}
