import {ElementRef, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddLocationPopupServiceService {
  public showAddLocationPopup = new Subject<boolean>();
  public event = this.showAddLocationPopup.asObservable();

  public publish(showAddLocationPopup: boolean) {
    this.showAddLocationPopup.next(showAddLocationPopup);
  }
}
