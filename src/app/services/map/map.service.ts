import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Waypoint} from "../../core/waypoint";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public centerOnWaypoint = new Subject<Waypoint>();
  public event = this.centerOnWaypoint.asObservable();

  public publish(waypoint: Waypoint) {
    this.centerOnWaypoint.next(waypoint);
  }
}
