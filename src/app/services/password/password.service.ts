import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Password} from "../../core/password";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private currentPassword: Password | undefined;
  public password = new Subject<Password>();
  public event = this.password.asObservable();

  public publish(password: Password) {
    this.currentPassword = password;
    this.password.next(password);
  }

  public getPassword() {
    if (this.currentPassword === undefined) {
      return "";
    }
    return this.currentPassword.password;
  }
}
