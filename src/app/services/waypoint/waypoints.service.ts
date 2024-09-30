import { Injectable } from '@angular/core';
import {Waypoint} from "../../core/waypoint";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WaypointsService {
  public waypoints = new Subject<Waypoint[]>();
  public event = this.waypoints.asObservable();

  public publish(waypoints: Waypoint[]) {
    this.waypoints.next(waypoints);
  }
}
