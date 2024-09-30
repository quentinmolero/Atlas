import {Component, ElementRef, ViewChild} from '@angular/core';
import {PasswordService} from "../../services/password/password.service";

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {
  @ViewChild('addLocation', {static: true}) addLocation!: ElementRef;

  constructor(
    private passwordStatus: PasswordService
  ) {
    this.passwordStatus.event.subscribe(event => {
      if (event.isValid) {
        this.addLocation.nativeElement.classList.remove("add-location-hidden")
      }
    })
  }

  yeet(event: MouseEvent) {
    console.log('yeet');
  }
}
