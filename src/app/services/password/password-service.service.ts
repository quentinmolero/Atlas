import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Password} from "../../core/password";

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {
  public password = new Subject<Password>();
  public event = this.password.asObservable();

  public publish(password: Password) {
    this.password.next(password);
  }
}
