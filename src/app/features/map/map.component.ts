import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from "../../../environments/environment";
import {WaypointService} from "../../services/api/waypoint.service";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/outdoors-v12';
  latitude = 46.85;
  longitude = 2.34;

  constructor() { }

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
      .then(waypoints => waypoints.forEach(waypoint => {
        if (this.map instanceof mapboxgl.Map) {
          new mapboxgl.Marker()
            .setLngLat([waypoint.longitude, waypoint.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<p>${waypoint.name}</p>`))
            .addTo(this.map)
        }
      }));
  }
}
