import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogger-app';

post = {
      userName: 'john doe',
      userId : 1,
      title: 'My First Blog',
      content: 'This is an offline blog post',
      date: new Date().toISOString()
    }
}
