import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {WaypointsService} from "../../services/waypoint/waypoints.service";
import {WaypointListItemComponent} from "../waypoint-list-item/waypoint-list-item.component";

@Component({
  selector: 'app-waypoint-list',
  standalone: true,
  imports: [],
  templateUrl: './waypoint-list.component.html',
  styleUrl: './waypoint-list.component.css'
})
export class WaypointListComponent {
  private isExpanded = false;
  @ViewChild('waypointList', {read: ViewContainerRef}) waypointList!: ViewContainerRef;
  @ViewChild('waypointListContainer', {static: true}) waypointListContainer!: ElementRef;
  @ViewChild('waypointListExpand', {static: true}) waypointListExpand!: ElementRef;
  @ViewChild('waypointListCollapse', {static: true}) waypointListCollapse!: ElementRef;

  constructor(
    private waypointsService: WaypointsService,
  ) {
    this.waypointsService.event.subscribe(waypoints => {
      waypoints.forEach(waypoint => {
        const waypointItem = this.waypointList.createComponent(WaypointListItemComponent);
        waypointItem.instance.name = waypoint.name.toString();
        waypointItem.instance.latLng = `${waypoint.latitude}, ${waypoint.longitude}`;
      })
    })
  }

  switchListDisplayState() {
    if (this.isExpanded) {
      this.collapseList();
    } else {
      this.expandList();
    }
  }

  expandList() {
    this.isExpanded = true;
    this.waypointListExpand.nativeElement.classList.add('waypoint-list-button-hidden');
    this.waypointListCollapse.nativeElement.classList.remove('waypoint-list-button-hidden');
    this.waypointListContainer.nativeElement.classList.remove('waypoint-list-body-collapsed');
  }

  collapseList() {
    this.isExpanded = false;
    this.waypointListExpand.nativeElement.classList.remove('waypoint-list-button-hidden');
    this.waypointListCollapse.nativeElement.classList.add('waypoint-list-button-hidden');
    this.waypointListContainer.nativeElement.classList.add('waypoint-list-body-collapsed');
  }
}
