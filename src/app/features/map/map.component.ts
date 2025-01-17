import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from "../../../environments/environment";
import {WaypointService} from "../../services/api/waypoint.service";
import {WaypointsService} from "../../services/waypoint/waypoints.service";
import {Waypoint} from "../../core/waypoint";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  private map: mapboxgl.Map | undefined;
  private style = 'mapbox://styles/mapbox/outdoors-v12';
  private latitude = 46.85;
  private longitude = 2.34;
  private waypointList: Waypoint[] = [];

  constructor(
    private waypointsState: WaypointsService,
  ) {
    waypointsState.event.subscribe(event => {
      this.waypointList = event;
    })
  }

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [this.longitude, this.latitude]
    });
    //this.map.addControl(new mapboxgl.NavigationControl());

    WaypointService.getAllWaypoint()
      .then(waypoints => {
        this.waypointList = waypoints;
        this.waypointsState.publish(this.waypointList);
        waypoints.forEach(waypoint => {
          if (this.map instanceof mapboxgl.Map) {
            new mapboxgl.Marker()
              .setLngLat([waypoint.longitude, waypoint.latitude])
              .setPopup(new mapboxgl.Popup().setHTML(`<p style="margin: 0; padding: 4px 8px;">${waypoint.name}</p>`))
              .addTo(this.map)
          }
        })
      });
  }
}
