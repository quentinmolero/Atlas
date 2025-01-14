import {Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AddLocationPopupServiceService} from "../../services/display/add-location-popup-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {LocationInputItemComponent} from "../location-input-item/location-input-item.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-location-input',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent implements OnInit{
  public searchText: string = "";
  private searchTerms = new Subject<string>();
  private locationItems: ComponentRef<LocationInputItemComponent>[] = [];
  @ViewChild('locationList', {read: ViewContainerRef}) locationList!: ViewContainerRef;
  @ViewChild('staticLocationText', {static: true}) staticLocationText!: ElementRef;
  @ViewChild('staticLocationImage', {static: true}) staticLocationImage!: ElementRef;

  constructor(
    private addLocationPopupService: AddLocationPopupServiceService,
    private http: HttpClient
  ) {
    this.addLocationPopupService.selectLocationItemEvent.subscribe(event => {
      this.staticLocationText.nativeElement.classList.add('location-input-preview-hidden');
      this.staticLocationImage.nativeElement.classList.remove('location-input-preview-hidden');
      this.staticLocationImage.nativeElement.src = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/pin-l-embassy+f74e4e(${event.longitude},${event.latitude})/${event.longitude},${event.latitude},3,0,0/400x400?access_token=${environment.mapbox.accessToken}`;
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
        console.log(feature);
        const locationItem = this.locationList.createComponent(LocationInputItemComponent);
        locationItem.instance.placeName = feature.text;
        locationItem.instance.locationNameWithCountry = feature.place_name;
        locationItem.instance.longitude = feature.center[0];
        locationItem.instance.latitude = feature.center[1];
        this.locationItems.push(locationItem);
      });
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
