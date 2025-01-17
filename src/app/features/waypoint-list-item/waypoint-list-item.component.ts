import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-waypoint-list-item',
  standalone: true,
  imports: [],
  templateUrl: './waypoint-list-item.component.html',
  styleUrl: './waypoint-list-item.component.css'
})
export class WaypointListItemComponent {
  @Input() name: string = "Waypoint name";
  @Input() latLng: string = "0.0, 0.0";
}
