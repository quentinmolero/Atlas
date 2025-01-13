import {Component, OnInit} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent implements OnInit{
  public searchText: string = "";
  private searchTerms = new Subject<string>();
  searchResults: any[] = [];
  constructor(
    private _addLocationPopupService: AddLocationPopupServiceService,
    private http: HttpClient,
  ) {
  }

  public onInputChange(text: string): void {
    this.searchText = text;
    this.search(this.searchText);
  }

  public searchLocation(location: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${environment.mapbox.accessToken}`;
    return this.http.get(url);
  }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchLocation(term))
    ).subscribe(results => {
      console.log(results);
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
