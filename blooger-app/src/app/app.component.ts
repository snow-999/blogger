import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { userService } from './services/userServices';
import { User } from './models/user.model';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogger-app';
  
}
