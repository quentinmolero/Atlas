import {ElementRef, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginPopupServiceService {
  public showLoginPopup = new Subject<boolean>();
  public event = this.showLoginPopup.asObservable();
  private _passwordInputPopup!: ElementRef;

  public publish(showLoginPopup: boolean) {
    this.showLoginPopup.next(showLoginPopup);
  }

  getPasswordInputPopup(): ElementRef {
    return this._passwordInputPopup;
  }

  setPasswordInputPopup(value: ElementRef) {
    this._passwordInputPopup = value;
  }
}
