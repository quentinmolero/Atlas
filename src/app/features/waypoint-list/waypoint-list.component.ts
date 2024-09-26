import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-waypoint-list',
  standalone: true,
  imports: [],
  templateUrl: './waypoint-list.component.html',
  styleUrl: './waypoint-list.component.css'
})
export class WaypointListComponent {
  private isExpanded = false;
  @ViewChild('waypointList', {static: true}) waypointList!: ElementRef;
  @ViewChild('waypointListExpand', {static: true}) waypointListExpand!: ElementRef;
  @ViewChild('waypointListCollapse', {static: true}) waypointListCollapse!: ElementRef;

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
    this.waypointList.nativeElement.classList.remove('waypoint-list-body-collapsed');
  }

  collapseList() {
    this.isExpanded = false;
    this.waypointListExpand.nativeElement.classList.remove('waypoint-list-button-hidden');
    this.waypointListCollapse.nativeElement.classList.add('waypoint-list-button-hidden');
    this.waypointList.nativeElement.classList.add('waypoint-list-body-collapsed');
  }
}
