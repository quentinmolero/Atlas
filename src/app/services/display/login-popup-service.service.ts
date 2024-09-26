import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginPopupServiceService {
  public showLoginPopup = new Subject<boolean>();
  public event = this.showLoginPopup.asObservable();

  public publish(showLoginPopup: boolean) {
    this.showLoginPopup.next(showLoginPopup);
  }
}
