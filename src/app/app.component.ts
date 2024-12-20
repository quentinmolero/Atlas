import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapComponent} from "./features/map/map.component";
import {LoginComponent} from "./features/login/login.component";
import {PasswordInputComponent} from "./features/password-input/password-input.component";
import {WaypointListComponent} from "./features/waypoint-list/waypoint-list.component";
import {AddLocationComponent} from "./features/add-location/add-location.component";
import {MapBoxLayerComponent} from "./features/map-box-layer/map-box-layer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, LoginComponent, PasswordInputComponent, WaypointListComponent, AddLocationComponent, MapBoxLayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Atlas';
}
