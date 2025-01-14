import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {LocationInputItemComponent} from "../../features/location-input-item/location-input-item.component";

@Injectable({
  providedIn: 'root'
})
export class AddLocationPopupServiceService {
  public showAddLocationPopup = new Subject<boolean>();
  public event = this.showAddLocationPopup.asObservable();

  public selectLocationItem = new Subject<LocationInputItemComponent>();
  public selectLocationItemEvent = this.selectLocationItem.asObservable();

  public publish(showAddLocationPopup: boolean) {
    this.showAddLocationPopup.next(showAddLocationPopup);
  }

  public publishSelectItemEvent(event: LocationInputItemComponent) {
    this.selectLocationItem.next(event);
  }
}
