import {Component, ElementRef, Inject, Renderer2, ViewChild} from '@angular/core';
import {Waypoint} from "../../core/waypoint";
import {WaypointsService} from "../../services/waypoint/waypoints.service";
import {DOCUMENT} from "@angular/common";

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

  constructor(
    private waypointsService: WaypointsService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.waypointsService.event.subscribe(event => {
      console.log(event);
      event.forEach(waypoint => {
        this.renderer.appendChild(this.waypointList.nativeElement, this.createWaypointLabelElement(waypoint.name.toString()))
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
    this.waypointList.nativeElement.classList.remove('waypoint-list-body-collapsed');
  }

  collapseList() {
    this.isExpanded = false;
    this.waypointListExpand.nativeElement.classList.remove('waypoint-list-button-hidden');
    this.waypointListCollapse.nativeElement.classList.add('waypoint-list-button-hidden');
    this.waypointList.nativeElement.classList.add('waypoint-list-body-collapsed');
  }

  createWaypointLabelElement(waypointName: string):HTMLElement {
    const waypointLabel = this.document.createElement('p');
    waypointLabel.textContent = waypointName;
    waypointLabel.classList.add('waypoint-list-element')
    console.log(waypointLabel);
    return waypointLabel;
  }
}
