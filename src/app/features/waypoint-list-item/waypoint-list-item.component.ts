import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PasswordService} from "../../services/password/password.service";
import {WaypointService} from "../../services/api/waypoint.service";
import {Waypoint} from "../../core/waypoint";
import {MapService} from "../../services/map/map.service";

@Component({
  selector: 'app-waypoint-list-item',
  standalone: true,
  imports: [],
  templateUrl: './waypoint-list-item.component.html',
  styleUrl: './waypoint-list-item.component.css'
})
export class WaypointListItemComponent {
  @Input() waypoint: Waypoint | undefined = undefined;
  @Input() id: string = "0";
  @Input() name: string = "Waypoint name";
  @Input() latLng: string = "0.0, 0.0";
  @ViewChild('waypointListItemButton', {static: true}) waypointListItemButton!: ElementRef;

  constructor(
    private passwordStatus: PasswordService,
    private mapService: MapService,
    ) {
    passwordStatus.event.subscribe((event) => {
      if (event.isValid) {
        this.waypointListItemButton.nativeElement.classList.remove('waypoint-list-item-delete-hidden');
      } else {
        this.waypointListItemButton.nativeElement.classList.add('waypoint-list-item-delete-hidden');
      }
    })
  }

  deleteWaypoint() {
    WaypointService.deleteWaypoint(this.id, this.passwordStatus.getPassword())
      .then(response => {
        if (response) {
          console.log('Waypoint deleted');
        }
      });
  }

  centerOnWaypoint() {
    if (this.waypoint !== undefined) {
      this.mapService.publish(this.waypoint);
    }
  }
}
