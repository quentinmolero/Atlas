import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {
  public password = new Subject<string>();
  public event = this.password.asObservable();

  public publish(password: string) {
    this.password.next(password);
  }
}
