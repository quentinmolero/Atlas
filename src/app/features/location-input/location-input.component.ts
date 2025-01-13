import {Component} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent {
  public searchText: string = "";
  constructor(
    private _addLocationPopupService: AddLocationPopupServiceService,
  ) {
  }

  public onInputChange(text: string): void {
    this.searchText = text;
    console.log(this.searchText);
  }
}
