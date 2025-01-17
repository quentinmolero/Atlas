import { Injectable } from '@angular/core';
import {Waypoint} from "../../core/waypoint";
import {Subject} from "rxjs";
import {WaypointService} from "../api/waypoint.service";
import * as mapboxgl from "mapbox-gl";

@Injectable({
  providedIn: 'root'
})
export class WaypointsService {
  public waypoints = new Subject<Waypoint[]>();
  public event = this.waypoints.asObservable();

  public publish(waypoints: Waypoint[]) {
    this.waypoints.next(waypoints);
  }

  public loadWaypoints() {
    WaypointService.getAllWaypoint()
      .then(waypoints => {
        this.publish(waypoints);
      });
  }
}
