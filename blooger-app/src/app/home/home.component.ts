import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
  }
}
