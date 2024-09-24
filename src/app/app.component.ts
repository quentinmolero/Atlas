import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapComponent} from "./features/map/map.component";
import {LoginComponent} from "./features/login/login.component";
import {PasswordInputComponent} from "./features/password-input/password-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, LoginComponent, PasswordInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Atlas';
}
