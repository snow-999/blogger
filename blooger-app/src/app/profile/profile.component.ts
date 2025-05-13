import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  addLike() {
    const btn = document.getElementById('likeButton');
    btn?.classList.toggle('liked');
    }
}
