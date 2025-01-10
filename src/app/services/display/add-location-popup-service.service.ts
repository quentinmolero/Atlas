import {ElementRef, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddLocationPopupServiceService {
  public showAddLocationPopup = new Subject<boolean>();
  public event = this.showAddLocationPopup.asObservable();
  private _addLocationPopup!: ElementRef;

  public publish(showAddLocationPopup: boolean) {
    this.showAddLocationPopup.next(showAddLocationPopup);
  }

  getAddLocationPopup(): ElementRef {
    return this._addLocationPopup;
  }

  setAddLocationPopup(value: ElementRef) {
    this._addLocationPopup = value;
  }
}
