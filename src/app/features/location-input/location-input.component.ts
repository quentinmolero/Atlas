import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {LocationInputItemComponent} from "../location-input-item/location-input-item.component";

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
  private locationItems: ComponentRef<LocationInputItemComponent>[] = [];
  @ViewChild('locationList', {read: ViewContainerRef}) locationList!: ViewContainerRef;

  constructor(
    private addLocationPopupService: AddLocationPopupServiceService,
    private http: HttpClient
  ) {
    this.addLocationPopupService.selectLocationItemEvent.subscribe(event => {
      this.locationItems.forEach(location => {
        if (location.instance === event) {
          location.instance.setSelectedStyle();
        } else {
          location.instance.resetSelectedStyle();
        }
      });
    });
  }

  public onInputChange(text: string): void {
    this.searchText = text;
    this.search(this.searchText);
  }

  public searchLocation(location: string): Observable<any> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${environment.mapbox.accessToken}&language=fr&types=place&limit=8`;
    return this.http.get(url);
  }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string): Observable<any> => this.searchLocation(term))
    ).subscribe(results => {
      this.locationList.clear();
      this.locationItems = [];
      results.features.forEach((feature: any) => {
        const locationItem = this.locationList.createComponent(LocationInputItemComponent);
        locationItem.instance.placeName = feature.text;
        locationItem.instance.locationNameWithCountry = feature.place_name;
        this.locationItems.push(locationItem);
      });
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
